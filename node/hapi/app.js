// // 单点入口 只有一个进入的点，通过路由。
// const Hapi = require('hapi');

// const server = new Hapi.Server();
// const routesHelloHapi = require('./routes/hello-hapi');
// const pluginHapiSwagger = require('./plugins/hapi-swagger')
// const config = require('./config')
// server.connection({
//     port: config.port,
//     host: config.host,
// });
// // async异步 会有数据库查询，授权。。。koa-swagger
// const init = async () => {
//     await server.register([
//         ...pluginHapiSwagger
//     ]);

//     // 配置路由
//     server.route([
//         ...routesHelloHapi
//     ]);
//     // 服务器启动
//     await server.start();
//     console.log(`Server Running at: ${server.info.uri}`);
// }

// init();
const Hapi = require('hapi');

const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi');
const routesShop = require('./routes/shops');
const routesOrders = require('./routes/orders');
const pluginHapiSwagger = require('./plugins/hapi-swagger');

const config = require('./config')
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ]);
  
  server.route([
    ...routesHelloHapi,
    ...routesShop,
    ...routesOrders
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();