// const fs = require('fs')     // will give an error
import fs from 'fs';

console.log(
    fs.readFileSync('es6.js', 'utf8')
);