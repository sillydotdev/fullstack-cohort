const fs = require('fs')
// import fs from 'fs';      // will give an error

console.log(
    fs.readFileSync('es6.js', 'utf8')
);