var router = require('koa-router')();

router
  .get('/list', async (ctx) => {
    ctx.body = "goods list";
  })
  .get('/detail', async (ctx) => {
    ctx.body = "goods detail";
  })

module.exports = router;