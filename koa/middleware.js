var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

app
  .use(async (ctx, next) => { // 如果不输入第一个参数，则匹配所有路由
    ctx.body = 'this is middleware'; // 1.在路由匹配之前做的操作（可以在后台管理系统中，用来监控用户是否登陆）

    next(); // 2.路由匹配（执行匹配上的路由方法）

    if (ctx.status === 404) { // 3.路由匹配完后，执行操作
      ctx.body = 'not found';
    }
  })

  // 中间件的执行顺序，洋葱模型。注意下面例子的打印顺序
  .use(async (ctx, next) => {
    console.log('1--第一个中间件-匹配路由前');
    next();
    console.log('5--第一个中间件-匹配路由前');
  })
  .use(async (ctx, next) => {
    console.log('2--第二个中间件-匹配路由前');
    next();
    console.log('4--第二个中间件-匹配路由前');
  })

  // 启用路由
  .use(router.routes())
  .use(router.allowedMethods())

router
  .get('/', async (ctx) => {
    ctx.body = "hello你好";
    console.log('3--路由开始匹配');
  })

app.listen(3000, () => {
  console.log('running server...')
});
