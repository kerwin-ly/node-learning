
// get && post 请求
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// 1.get请求，通过query获取参数
app.get('/menu_list', (req, res) => {
  console.log(req.query);
  res.send('get');
})

// 2.post请求，需要安装第三方包。body-parser(将其请求参数传递到body对象中)

// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('post');
})