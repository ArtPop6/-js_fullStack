const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
// cnpm i koa koa-static -S
// static 为静态资源

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  await next();
})
app.use(koaStatic(
  path.join(__dirname , './static')
))

app.listen(9999, () => {
  console.log('server is running 9999');
});