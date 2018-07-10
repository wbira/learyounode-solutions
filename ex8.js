const http = require('http');
const bl = require('bl');

const url = process.argv[2];

// solution with external lib
http.get(url, response => {
  response.pipe(
    bl((err, data) => {
      if (err) {
        console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});

// solution without external lib
let results = [];
http.get(url, response => {
  response.setEncoding('utf8');
  response.on('data', data => {
    results.push(data);
  });
  response.on('end', () => {
    const data = results.join('');
    console.log(data.length);
    console.log(data);
  });
});
