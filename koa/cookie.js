var Koa = require('koa'),
    Route = require('koa-router')

var app = new Koa();
var router = new Route();

// 中文转base64
function convertWordToBase64(word) {
  return new Buffer(word).toString('base64');
}

// base64转中文
function convertBase64ToWord(base64) {
  return new Buffer(base64, 'base64').toString();
}

// cookie: 在同一个浏览器中，同一个域名，共享数据
router.get('/', async (ctx) => {
  // 设置cookie
  ctx.cookies.set('userName', 'kerwin', {
    maxAge: 60 * 1000 * 60,
    // path: '/user', // 只有在user路由中能够使用
    // secure: false, // http || https,默认是false
    // httpOnly: false, // 浏览器和服务端都可以访问 || 只有服务端可以访问
    // domain: '.baidu.com' // 允许的域名
  })

  // 如果是中文就用buffer转成base64字符串
  ctx.cookies.set('sex', convertWordToBase64('男'), {
    maxAge: 60 * 1000 * 60
  })
})

router.get('/user', async (ctx) => {
  // 获取cookie
  console.log(ctx.cookies.get('userName'))
  console.log(convertBase64ToWord(ctx.cookies.get('sex')))
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server running');
})