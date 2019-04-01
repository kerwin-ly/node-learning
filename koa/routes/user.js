var router = require('koa-router')();

router
  .get('/list', async (ctx) => {
    ctx.body = "user list";
  })
  .get('/detail', async (ctx) => {
    ctx.body = "user detail";
  })

module.exports = router;