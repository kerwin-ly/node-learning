let express = require('express');

// 创建服务
let app = express();

// 公开指定目录，使其通过路径可访问
app.use('/public/', express.static('./public/'));

// 请求
app.get('/', (req, res) => {
  res.send('hello express');
})

// 监听
app.listen(3000, () => {
  console.log('start server');
})
