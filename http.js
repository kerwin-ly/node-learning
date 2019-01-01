var http = require('http');

// 创建实例
let server = http.createServer();

// 监听请求
server.on('request', (request, response) => {
  // console.log(request); // request对象
  response.write('response success');
  response.end(); // 结束响应，否则客户端将一直处于请求状态，无响应。
})

// 绑定端口
server.listen(3000, () => {
  console.log('start server');
})