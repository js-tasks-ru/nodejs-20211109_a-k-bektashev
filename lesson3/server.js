const http = require('http');
const server = new http.Server();

server.on('request', (req, res) => {
  if (req.url === '/') {
    res.end('Hi');
  }

  req.pipe(res);
});

module.exports = server;
