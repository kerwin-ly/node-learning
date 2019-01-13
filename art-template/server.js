let http = require('http');
let fs = require('fs');
// 引入第三方包
// 先寻找node-modules文件夹，如果当前位置没有，则前往上一层目录查找。
// 找到后node-modules，再定位其目标文件的入口文件
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