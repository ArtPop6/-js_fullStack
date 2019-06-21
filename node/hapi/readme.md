npm init -y
yarn add 
后端给前端好的api调用
有插件可以做了
yarn add hapi@16
yarn add env2
yarn add hapi-swagger@7 inert@4 vision@4 package // 插件方式添加功能
yarn add joi@13

- hapi 做一个企业级开发node框架 koa块但轻量
  - 后端开发中的一些plugins（登陆验证。。。要哪个功能就装哪个插件）
    API文档 自动生成
- 一个模块一个路由文件。 routes hello-hapi.js
  config
- env2 将加密的账号信息， 以配置文件的方式，加载进进程之中process,
  process.env
    .env 请加入gitignore

  