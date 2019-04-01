var Koa = require('koa'),
    Route = require('koa-router'),
    session = require('koa-session')

var app = new Koa();
var router = new Route();


router.get('/', async (ctx) => {
  ctx.session.user = 'kerwin'; // set session
  ctx.body = "login success";
})

router.get('/user', async (ctx) => {
  console.log(ctx.session.user); // get session
})

const config = {
  key: 'sessionID', // default
  maxAge: 60 * 1000 * 60 * 24, // expire time
  overwrite: true,
  httpOnly: true, // only server get cookie
  signed: true, // default
  rolling: true, // force to update the session when server responsed
  renew: false // renew the session when session nearly expired, so we can keep the user still login in.
}

app.keys = ['kerwin']
app
  .use(session(config, app))
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server running');
})