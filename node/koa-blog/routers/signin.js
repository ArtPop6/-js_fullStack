const router = require('koa-router')();

router.get('/signin',  async (ctx) => {
  // ctx.body = 'signin page';直接渲染模板引擎
  await ctx.render('signin');
})
// 接收数据
router.post('/signin', async (ctx) => {
  // 返回对象
  // ctx.body = '{code: 200}';
  const { name, password, repeatPass } = ctx.request.body;
  console.log(name, password, repeatPass);
  ctx.body = {code: 200};
})
module.exports = router;