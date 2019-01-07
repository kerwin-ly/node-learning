let http = require('http');
let fs = require('fs');

// 创建实例
let server = http.createServer();

// 监听请求
server.on('request', (req, res) => {
  // res.end('response success'); // 结束并返回数据 res.write('content') + res.end()
  // 注： 响应内容只能是字符串 || 二进制
  console.log(req.socket.remoteAddress, req.socket.remotePort) // 远程请求的ip地址， 端口号
  if (req.url === '/plain') {
    res.setHeader('Content-type', 'text/plain; charset=utf-8');
    // 重定向到根路径（浏览器根据状态码302进行重定向，去找header中的Location）
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end('plain content');
  } else if (req.url === '/html') {
    res.setHeader('Content-type', 'text/html; charset=utf-8');
    fs.readFile('./index.html', (error, data) => {
      if (error) {
        return 'Not Found!'
      }
      res.end(data); // res.end()可识别二进制和字符串格式
    })
  } else {
    res.end('index page');
  }
})