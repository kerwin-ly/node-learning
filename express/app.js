let express = require('express');
let path = require('path');

// 创建服务
let app = express();

// 公开指定目录，使其通过路径可访问
// 前面参数为访问路径，后面为文件夹位置
// app.use('/public/', express.static('./public/'));

// 直接暴露某文件，通过/js/main.js访问
app.use(express.static(path.join(__dirname, './public/')))

// 请求
app.get('/', (req, res) => {
  res.send('hello express');
})

// 监听
app.listen(3000, () => {
  console.log('start server');
})
