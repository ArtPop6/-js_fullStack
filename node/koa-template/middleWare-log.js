const Koa = require('Koa');

const app = new Koa();
// 计算时间间隔
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const end = Date.now();
    const diff = end - start;
    // 响应头里面  原声node writeHead Content-type  没有规定有这种响应头，自定义通常以X开头
    ctx.set('X-Response-Time', `${diff}ms`);
    // favicon也有请求
    console.log(`spend ${diff}ms`);
})
// 专门负责响应 response
app.use(async (ctx) => {
    ctx.body = `hello Koa`;
})
app.listen(3001);
