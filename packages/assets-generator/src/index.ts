import * as path from 'path';
import * as fs from 'fs';

/*
 * This module will read the assets in ./app/src/assets/images
 * and generate the index files appropriately so that on the web
 * we can use remote URIs and on mobile we can use local URIs.
 * This is done because ReactXP does not have built in support for
 * local URIs on the web.
 */
const initialDirectoryPath = path.join(__dirname, '../../app/src/assets/images');
console.log(initialDirectoryPath);

/*
 * We first need to collect all of the images (including subdirs)
 * and attach their paths
 * Then we can iterate over that to create our index files
 */
interface File {
  name: string;
  path: string;
}

const filesArray: File[] = [];

const getFiles = (directoryPath: string) => {
  fs.readdir(directoryPath, (error, files) => {
    if (error) {
      console.log(error);
    } else {
      files.forEach((fileName) => {
        console.log(fileName);
        /*
         * Test if the file is a folder
         * and recurse, passing the new dir in
         */
        const filePath = path.join(directoryPath, fileName);

        fs.lstat(filePath, (error, stats) => {
          if (error) {
            console.log(error);
          } else {
            const isDirectory = stats.isDirectory();

            if (isDirectory) {
              /*
               * Recurse using the filePath as the directoryPath
               */
              getFiles(filePath);
            } else {
              const file = {
                name: fileName,
                path: filePath, // TODO: Need the relative file path
              };
              console.log(file);

              filesArray.push(file);
            }
          }
        });
      });
    }
  });
};

getFiles(initialDirectoryPath);

// TODO: How do we wait for all files before continuing?
