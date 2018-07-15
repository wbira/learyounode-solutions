const net = require("net");

const port = process.argv[2];

const getMonth = date => {
  const month = date.getMonth() + 1;
  return month < 10 ? `0${month}` : month.toString();
};

const formatDate = date =>
  `${date.getFullYear()}-${getMonth(
    date
  )}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`;

const server = net.createServer(socket => {
  const date = formatDate(new Date());
  socket.end(date);
});

server.listen(port);
