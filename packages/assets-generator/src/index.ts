import * as path from 'path';
import * as fs from 'fs';

/*
 * This module will read the assets in ./app/src/assets/images
 * and generate the index files appropriately so that on the web
 * we can use remote URIs and on mobile we can use local URIs.
 * This is done because ReactXP does not have built in support for
 * local URIs on the web.
 *
 * NOTE:
 *
 * Asset keys are camelCased
 * Assets should be saved in kebab-case
 */
const imagesFilePath = '/images';
const relativeFilePath = `/assets/${imagesFilePath}`;
const initialDirectoryPath = path.join(__dirname, `../../app/src/${relativeFilePath}`);
const fileType = '.png'; // TODO: Allow for any file type

/*
 * We first need to collect all of the images (including subdirs)
 * and attach their paths
 * Then we can iterate over that to create our index files
 */
interface File {
  id: string;
  relativePath: string;
}

const filesArray: File[] = [];

const getVariableName = (string: string) => {
  const variableName = string.replace(/-/g, '_').toUpperCase();

  return variableName;
};

const stringToCamelCase = (string: string) => {
  return string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

const getKey = (string: string) => {
  const key = stringToCamelCase(string.replace(/-/g, ' '));

  return key;
};

const getFiles = async (directoryPath: string, recursing?: boolean) => {
  try {
    const files = await fs.readdirSync(directoryPath);

    for (const fileName of files) {
      /*
       * Test if the file is a folder
       * and recurse, passing the new dir in
       */
      const filePath = path.join(directoryPath, fileName);
      const stats = fs.lstatSync(filePath);
      const isDirectory = stats.isDirectory();

      if (isDirectory) {
        /*
         * Recurse using the filePath as the directoryPath
         */
        await getFiles(filePath, true);
      } else {
        const id = fileName.replace(fileType, '');
        const relativePath = `${filePath.replace(initialDirectoryPath, '')}`;
        const file = {
          id,
          relativePath,
        };

        filesArray.push(file);
      }
    }
  } catch (error) {
    console.log(error);
  }

  if (!recursing) {
    /*
     * We have all the files, let's create our native files
     */
    let index = '';
    index += "import Assets from './Assets'\n";
    index += "import { ASSETS_DOMAIN } from '../config'\n";
    index += '\n';
    index +=
      'const getImageUrl = (relativePath: string) => `${ASSETS_DOMAIN}/images${relativePath}`;\n';
    index += '\n';
    index += 'const assets: Assets = {\n';

    filesArray.forEach((file: File) => {
      const { id, relativePath } = file;

      index += `'${getKey(id)}': getImageUrl('${relativePath}'),\n`;
    });

    index += '}\n';
    index += '\n';
    index += 'export default assets;\n';

    let indexNative = '';
    indexNative += "import Assets from './Assets'\n";
    indexNative += '\n';

    filesArray.forEach((file: File) => {
      const { id, relativePath } = file;

      indexNative += `const ${getVariableName(id)} = require('./images${relativePath}');\n`;
    });

    indexNative += '\n';
    indexNative += 'const assets: Assets = {\n';

    filesArray.forEach((file: File) => {
      const { id } = file;

      indexNative += `'${getKey(id)}': ${getVariableName(id)},\n`;
    });

    indexNative += '}\n';
    indexNative += '\n';
    indexNative += 'export default assets;\n';

    let assets = '';
    assets += 'interface AssetField {\n';
    assets += '[key: string]: string;\n';
    assets += '}\n';
    assets += '\n';
    assets += 'interface Assets extends AssetField {\n';

    filesArray.forEach((file: File) => {
      const { id } = file;

      assets += `'${getKey(id)}': string;\n`;
    });

    assets += '}\n';
    assets += '\n';
    assets += 'export default Assets;\n';

    const assetsDirectoryPath = initialDirectoryPath.replace(imagesFilePath, '');

    await fs.writeFileSync(`${assetsDirectoryPath}/index.ts`, index);
    await fs.writeFileSync(`${assetsDirectoryPath}/index.native.ts`, indexNative);
    await fs.writeFileSync(`${assetsDirectoryPath}/Assets.ts`, assets);
  }
};

getFiles(initialDirectoryPath);
