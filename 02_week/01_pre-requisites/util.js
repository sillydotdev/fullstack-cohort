const fs = require('fs');

function createFile(fileName, content) {
    fs.writeFileSync(fileName, content)
    console.log("File created and its content written in it...");
}

module.exports = {
    createFile
}