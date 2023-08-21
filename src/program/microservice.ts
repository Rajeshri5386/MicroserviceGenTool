import { FileHelper } from "../common/file-helper";

var config = require('../config/microservice-config');

const fs = require('fs');
const path = require('path');

class Microservice {
    private appName: string;
    private appDir: string;

    constructor(AppData: any) {
        this.setConfiguration(AppData);
    }

    setConfiguration(appDate: any) {
        this.appName = appDate.microserviceName;
        this.appDir = path.join(process.cwd(), '\\', appDate.microserviceName);
    }

    public initialize() {        
        if (!fs.existsSync(this.appDir)) {
            fs.mkdirSync(this.appDir);
            console.log(`${this.appDir} folder created successfully.`)
        } else {
            console.log(`${this.appDir} folder already exists.`)
        }

        // copy templates 
        const templatePath = path.join(process.cwd(), '\\', config.templatePath);
        FileHelper.copyFolderRecursive(templatePath, this.appDir);

        // update teamplates 
    }
}

export { Microservice }