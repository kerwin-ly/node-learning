let http = require('http');
let fs = require('fs');
let template = require('art-template');

let server = http.createServer();

server.on('request', (req, res) => {
  fs.readFile('./template.html', (error, data) => {
    if (error) {
      return 'Not Found!';
    }

    // 模版引擎渲染,文件读取的二进制文件必须转为字符串
    let ret = template.render(data.toString(), {
      name: 'kerwin',
      age: '24',
      hobbies: ['roller skating', 'play games']
    })
    res.end(ret);
  })
})

server.listen(3000, () => {
  console.log('start server');
})