let express = require('express');
let session = require('express-session');

let app = express();

// 配置信息
app.use(session({
  secret: 'itcast', // 拼接加密字符串
  resave: false,
  saveUninitialized: true // 无论是否使用，均存储钥匙
}))

app.get('/', (req, res, next) => {
  req.session.user = user; // 添加用户信息
})
