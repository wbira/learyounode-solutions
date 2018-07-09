const fs = require('fs');

const urlToFile = process.argv[2];

const fileReadCb = (err, fileContent) => {
  if (err) throw err;
  const numberOfLines = fileContent.split('\n').length;
  console.log(numberOfLines - 1);
};
fs.readFile(urlToFile, 'utf8', fileReadCb);
