// 路由模块

var Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');

// var router = require('koa-router')(); // 引用和实例化路由

// 实例化
var app = new Koa();
var router = new Router();

// 配置bodyParsers,封装post请求，获取其请求参数的中间件
app.use(bodyParser);

// 配置路由
router
  .get('/', async (ctx) => { // context上下文,包含了req,res等信息
    ctx.body = "hello你好"; // 返回数据，相当于原生node中的res.writeHead() + res.end()
  })
  .get('/news', async (ctx) => {
    ctx.body = "this is news";
  })
  .get('/news_detail', async (ctx) => {
    console.log(ctx.query); // get请求获取参数，ctx.query || ctx.request.query (querystring)
    console.log(ctx.request.body); // post请求获取参数
  })
  .get('/goods_detail/:id', async (ctx) => {
    console.log(ctx.params); // 动态路由 /news_detail/xxx
  })

app
  .use(router.routes()) // 启动路由
  .use(router.allowedMethods()) // 根据状态status设置响应头

app.listen(3000, () => {
  console.log('running server...')
});
