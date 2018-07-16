const http = require("http");
const urlService = require("url");

const PORT_NUMBER = process.argv[2];

const PARSE_TIME_ENDPOINT = "/api/parsetime";
const UNIX_TIME_ENDPOINT = "/api/unixtime";

const parseQueryData = queryParams => {
  if (queryParams && queryParams.iso) {
    return new Date(queryParams.iso);
  }
};

const formatDate = date => ({
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds()
});

const requestHandler = (request, response) => {
  const { url } = request;
  const parsedUrl = urlService.parse(url, true);
  const parsedDate = parseQueryData(parsedUrl.query);
  let responseData;
  if (parsedUrl.pathname === PARSE_TIME_ENDPOINT) {
    responseData = formatDate(parsedDate);
  } else if (parsedUrl.pathname === UNIX_TIME_ENDPOINT) {
    responseData = { unixtime: parsedDate.getTime() };
  }
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(responseData));
};

http.createServer(requestHandler).listen(PORT_NUMBER);
