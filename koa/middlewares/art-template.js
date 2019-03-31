
var Koa = require('koa'),
    Router = require('koa-router'),
    render = require('koa-art-template'),
    path = require('path')

var app = new Koa(),
    router = new Router()

render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html'
})

app
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

