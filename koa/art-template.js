// 模板渲染引擎

var Koa = require('koa'),
    Router = require('koa-router'),
    render = require('koa-art-template'),
    path = require('path'),
    serve = require('koa-static')

var app = new Koa(),
    router = new Router()

// 配置art-template中间件
render(app, {
  root: path.join(__dirname, './views'),
  extname: '.html'
})

app
  .use(serve(path.join(__dirname, './static'))) // 配置koa-static中间件
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000, () => {
    console.log('server running...')
  })

router.get('/', async (ctx) => {
  let persons = [{
    name: 'Kerwin',
    age: 24
  }, {
    name: 'Bob',
    age: 23
  }]

  await ctx.render('index', {
    title: 'koa-art-template',
    persons
  })
})

