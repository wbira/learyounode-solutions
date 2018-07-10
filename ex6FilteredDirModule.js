const fs = require('fs');
const path = require('path');

const extensionFilter = extension => file =>
  path.extname(file) === `.${extension}`;

const filteredDirModule = (dir, extension, cb) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return cb(err);
    }
    const filteredFiles = files.filter(extensionFilter(extension));
    cb(null, filteredFiles);
  });
};

module.exports = filteredDirModule;
