let express = require('express');
let bodyParser = require('body-parser');
let artTemplate = require('express-art-template');

let router = require('./router');
let app = express();

// 配置express-art-template
app.engine('html', artTemplate);

// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 配置路由
app.use(router);

app.listen(3000, () => {
  console.log('start server...');
})