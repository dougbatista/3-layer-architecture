class FileReader {
    async readFile(fileLocation) {
        const fs = require('fs');
        return new Promise((resolve, reject) =>
            fs.readFile(fileLocation, (err, content) => err ?
                reject(err) : resolve(JSON.parse(content)))
        )
    }
}

module.exports = new FileReader()