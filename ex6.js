const filteredDirModule = require('./ex6FilteredDirModule');
const [dir, extension] = process.argv.slice(2);

const cb = (err, files) => {
  if (err) return;
  files.forEach(file => {
    console.log(file);
  });
};

filteredDirModule(dir, extension, cb);
