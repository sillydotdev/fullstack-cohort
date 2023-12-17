// const fs = require('fs');
const fs = require('fs').promises;

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })
fs.readFile('file.txt', 'utf-8')
    .then((data) =>{
        console.log(`The data of file is: ${data}`);
    })
    .catch((err) => {
        console.log(err);
    });