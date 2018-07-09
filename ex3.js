const fs = require('fs');

const urlToFile = process.argv[2];
const contentOfTheFile = fs.readFileSync(urlToFile);
const numberOfLines = contentOfTheFile.toString().split('\n');
console.log(numberOfLines.length - 1);
