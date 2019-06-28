cnpm i koa koa-static koa-router -S

## 跨域报错 只发生在前端
浏览器的安全策略，
协议 域名 端口 有一个不一致的时候就存在跨域
https://www.abc.com/a  https://www.abc.com/b 一致，端口默认8080

## cors 
cross origin resource share 跨域资源共享
1. 一个标准，规定了一些 http 的首部字段，让服务器允许哪些网站可以访问。 头部加载在服务器上的
2. 规定，如果是非简单请求，浏览器会先发一个预检请求，从服务端知道是否允许跨域，如果允许。才会发出正式的请求
3. 非简单请求，简单请求

## jsonp 原理
1. script标签可以跨域
2. 加载进来的内容会被当作 js 执行
3. 后端 先获取到 前端发出的 callback 在 callback里面插入自己想要返回的内容
4. 前端拿到返回的内容当作js执行，
···js
getUser({
    name:
    age:
})
5. 预先定义好一个函数
6. 缺点: 只能 get 请求
7. 写一个promise风格的jsonp函数  参数对象
8. param={type}
jsonp(url, param = {})
   .then(res => {
        console.log(res)
    })

1. 一个全局的方法
2. 插入一个script标签， 根据方法名 param 拼接 url
3. 根据js的加载情况 判断请求成功与否 返回数据
4. script 标签上面 有事件



