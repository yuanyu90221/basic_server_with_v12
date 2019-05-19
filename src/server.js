const http = require('http');
const url = require('url');
const PORT = process.env.PORT || 3000;
const {logger} = require('./lib/logger');
http.createServer((req, res)=>{
  logger.info(`req path :`, url.parse(req.url).pathname);
  res.writeHead(200, {
    'Content-Type':'text/html'
  });
  res.end(`<h1>Hello World! My Name is Json Liang</h1>`);
}).listen(PORT);

logger.info(`server is running on ${PORT}`);