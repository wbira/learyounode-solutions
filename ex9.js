const http = require('http');

const urls = process.argv.slice(2);

const urlsMap = urls.reduce((acc, curr) => {
  acc[curr] = false;
  return acc;
}, {});

const fetchUrl = cb => url => {
  let results = [];
  http.get(url, response => {
    response.setEncoding('utf8');
    response.on('data', data => {
      results.push(data);
    });
    response.on('end', () => {
      const data = results.join('');
      cb(url, data);
    });
  });
};

const saveResultsAndPrintIfReady = (url, data) => {
  urlsMap[url] = data;
  const urlValues = Object.values(urlsMap);
  if (urlValues.every(val => !!val)) {
    urls.forEach(url => console.log(urlsMap[url]));
  }
};

urls.forEach(fetchUrl(saveResultsAndPrintIfReady));
