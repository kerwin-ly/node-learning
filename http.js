var http = require('http');

// 创建实例
let server = http.createServer();

// 监听请求
server.on('request', (req, res) => {
  // res.end('response success'); // 结束并返回数据 res.write('content') + res.end()
  // 注： 响应内容只能是字符串 || 二进制
  console.log(req.socket.remoteAddress, req.socket.remotePort) // 远程请求的ip地址， 端口号
  if (req.url === '/') {
    res.end('index page');
  } else {
    res.end('other page');
  }
})

// 绑定端口
server.listen(3000, () => {
  console.log('start server');
})