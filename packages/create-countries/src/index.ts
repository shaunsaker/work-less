import * as path from 'path';
import * as fs from 'fs';

const directoryPath = path.join(__dirname, 'images');

fs.readdir(directoryPath, (error, files) => {
  if (error) {
    console.log(error);
  } else {
    let indexFile = '';
    const indexFileName = 'index.ts';

    /*
     * Create the require statements
     */
    files.forEach((fileName) => {
      if (fileName !== indexFileName) {
        const code = fileName.split('.')[0];
        const line = `const ${code} = require('./${fileName}');\n`;

        indexFile += line;
      }
    });

    /*
     * Create the object
     */
    indexFile += '\n';
    indexFile += 'const countries = {\n';

    files.forEach((fileName) => {
      if (fileName !== indexFileName) {
        const code = fileName.split('.')[0];
        const line = `${code},\n`;

        indexFile += line;
      }
    });

    indexFile += '};\n';
    indexFile += '\n';

    /*
     * Create the export
     */
    indexFile += 'export default countries;\n';

    /*
     * Write the file
     */
    const indexFilePath = path.join(directoryPath, indexFileName);

    fs.writeFile(indexFilePath, indexFile, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Success.');
      }
    });
  }
});
