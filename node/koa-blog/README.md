## 3th middleWare
扩展 ctx
koa-views 
ctx.render()

引入 koa-bodyParser 解析前端提交过来的数据 {name, password} 放到body里
保证 取值的时候 存在body属性只有前面的中间件扩展了body属性才可以

.post('/signin');
解析提交过来的数据访问这个路由是就存在这个body里
ctx.request.body
cnpm i koa-bodyparser -S

const { name, password, repeatPass } = ctx.request.body;
能在服务器上看到提交过来的数据
