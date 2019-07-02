npm -g @vue-cli

vue init webpack vuex-counter
cd vue-counter/
npm run start

.babelrc babel配置 es6-》es5
## elem
vue的定义里定义data ()方法会return一个object，object里面的所有的值都会添加到它的依赖之中 ，然后在模板里面访问这个msg
- 可以通过定义object去定义一个组件
- 标签大小写不敏感
- 引用一定要在组件通过components{}注册
- 要先引用再注册就可以用这个标签了
- vue请求localhost 主页面请求  app.js打包后生成的代码 
## webpack
- 把各种各样前端资源打包成js png css
- webpack配置