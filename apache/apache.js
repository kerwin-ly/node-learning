let http = require('http');
let fs = require('fs');

let server = http.createServer();
let wwwDir = './www';

server.on('request', (req, res) => {
  let url = req.url;
  let filePath = '';
  
  if (url === '/') {
    filePath = '/index.html';
  } else {
    filePath = url;
  }
  fs.readFile(wwwDir + filePath, (error, data) => {
    if (error) {
      return res.end('Not Found!');
    }
    res.end(data);
  })
});

server.listen('3000', () => {
  console.log('start server');
});