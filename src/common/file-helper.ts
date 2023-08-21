const fs = require('fs');
const path = require('path');

export class FileHelper {

    static copyFolderRecursive(source : string, target: string) {

        // Check if the source path exists
        if (!fs.existsSync(source)) {
            console.log(`Source path "${source}" does not exist.`);
            return;
        }

        // Check if the target path exists, create it if not
        if (!fs.existsSync(target)) {
            fs.mkdirSync(target);
            console.log(`Created target directory "${target}".`);
        }
      
        const files = fs.readdirSync(source);
      
        files.forEach((file: any) => {

            const sourcePath = path.join(source, file);
            const targetPath = path.join(target, file);
          
            if (fs.lstatSync(sourcePath).isFile()) {             
                fs.copyFileSync(sourcePath, targetPath);               
            } else {               
                FileHelper.copyFolderRecursive(sourcePath, targetPath);
            }
        });
    }  

}