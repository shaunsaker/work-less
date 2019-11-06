import * as path from 'path';
import * as fs from 'fs';

/*
 * This module will read the assets in ./app/src/assets/images
 * and generate the index files appropriately so that on the web
 * we can use remote URIs and on mobile we can use local URIs.
 * This is done because ReactXP does not have built in support for
 * local URIs on the web.
 */

console.log(__dirname);

// const directoryPath = path.join(__dirname, 'images');

// fs.readdir(directoryPath, (error, files) => {
//   if (error) {
//     console.log(error);
//   } else {
//     let indexFile = '';
//     const indexFileName = 'index.ts';

//     /*
//      * Create the require statements
//      */
//     files.forEach((fileName) => {
//       if (fileName !== indexFileName) {
//         const code = fileName.split('.')[0];
//         const line = `const ${code}Image = require('./${fileName}');\n`;

//         indexFile += line;
//       }
//     });

//     /*
//      * Create the interface
//      */
//     indexFile += '\n';
//     indexFile += 'interface ICountries {\n';
//     indexFile += '[key: string]: string;\n';
//     indexFile += '};\n';

//     /*
//      * Create the object
//      */
//     indexFile += '\n';
//     indexFile += 'const countries: ICountries = {\n';

//     files.forEach((fileName) => {
//       if (fileName !== indexFileName) {
//         const code = fileName.split('.')[0];
//         const line = `'${code}': ${code}Image,\n`;

//         indexFile += line;
//       }
//     });

//     indexFile += '};\n';
//     indexFile += '\n';

//     /*
//      * Create the export
//      */
//     indexFile += 'export default countries;\n';

//     /*
//      * Write the file
//      */
//     const indexFilePath = path.join(directoryPath, indexFileName);

//     fs.writeFile(indexFilePath, indexFile, (error) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Success.');
//       }
//     });
//   }
// });
