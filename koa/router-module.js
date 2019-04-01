var Koa = require('koa');
var router = require('koa-router')();

var user = require('./routes/user');
var goods = require('./routes/goods');

// 实例化
var app = new Koa();

// 模块化路由
router.use('/user', user.routes(), user.allowedMethods()); // 匹配/user中的路由，在user路由模块中查找 
router.use('/goods', goods.routes(), user.allowedMethods());

app
  .use(router.routes()) // 启动路由
  .use(router.allowedMethods()) // 根据状态status设置响应头

app.listen(3000, () => {
  console.log('running server...')
});
