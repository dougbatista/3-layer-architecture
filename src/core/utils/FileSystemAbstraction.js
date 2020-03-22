const fs = require('fs');

class FileSystemAbstraction {
    async readFile(fileLocation) {

        return new Promise((resolve, reject) =>
            fs.readFile(fileLocation, (err, content) => err ?
                reject(err) : resolve(JSON.parse(content)))
        );
    }

    async writeFile(fileLocation, content) {

        return new Promise((resolve, reject) =>
            fs.writeFile(fileLocation, content, (err, content) => err ?
                reject(err) : resolve(content))
        );   
    }
}

module.exports = new FileSystemAbstraction()