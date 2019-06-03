const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();
// ejs提供了转html的中间件
// 告诉我们模板引擎在哪个位置view
app.use(
    views(
        path.join(__dirname, './view'),{
            extension: 'ejs'
        }
    )
)
const user = {
    name: 'Ajie',
    post: [
        {id: 0, title: '流动的 SVG 线条'},
        {id: 1, title: 'Vue.js 系列'}
    ]
}
const posts = [
    {
        id: 0,
        content: '用 svg + css 实现'
    }, 
    {
        id: 1,
        content: 'react 表示不服'
    }
]
app.use(async (ctx) => {
    // req res
    //  /user 用户的主页
    // req.url 拿到用户请求的地址， 解析出请求的地址
    if (ctx.path === '/user') {
        // 用户页面 user ，ejs与页面视图有关 模板引擎 异步
        await ctx.render('user', {
            user
        });
    }
    else if (ctx.path === '/post') {
        // 封装好的get请求的查询参数？name=a&age=b {name: age:}
        const { id } = ctx.query;
        // string posts number 所以两个等号
        const post = posts.find(item => item.id == id);
        await ctx.render('post', {post})
    } else {
        ctx.body = '无法处理该路径' + ctx.request.url
    }
})
// 轻量级，介于封装与不封装之间 .listen就是原生 http .listen
app.listen(8080, () => {
    console.log('server is running 8080')
})