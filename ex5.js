const fs = require('fs');
const path = require('path');

const [dirName, extension] = process.argv.slice(2);

const extensionFilter = extension => file =>
  path.extname(file) === `.${extension}`;

const readDirCb = (err, files) => {
  if (err) throw err;
  const filteredFiles = files.filter(extensionFilter(extension));
  filteredFiles.forEach(file => {
    console.log(file);
  });
};
fs.readdir(dirName, readDirCb);
