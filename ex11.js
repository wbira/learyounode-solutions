const http = require("http");
const fs = require("fs");

const [PORT_NUMBER, PATH_TO_FILE] = process.argv.slice(2);

const server = http.createServer((request, response) => {
  return fs.createReadStream(PATH_TO_FILE).pipe(response);
});
server.listen(PORT_NUMBER);
