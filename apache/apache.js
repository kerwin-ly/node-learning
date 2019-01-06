let http = require('http');
let fs = require('fs');
let template = require('art-template')

let server = http.createServer();
let wwwDir = './www';

http
  .createServer((req, res) => {
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

      // 读取指定位置的文件 && 文件目录
      fs.readdir(wwwDir, (error, files) => {
        if (error) {
          res.end(data);
        } else {
          // 渲染index.html的模板数据
          let htmlStr = template.render(data.toString(), {
            files
          })
          res.end(htmlStr);
        }
      })
    })
  })
  .listen(3000, () => {
    console.log('start server');
  })