// // 模块化见其人
// module.exports = [
//     {
//         method: 'GET',
//         path: '/',
//         handler: (request, reply) => {
//             reply('hello hapi');
//         },
//         config: {
//           // 登陆校验? 后端首页api开发
//           // swagger API文档
//           tags: ['api', 'tests'],
//           description: '测试hello-api'
//         }
//     }
// ]
module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('hello hapi');
    },
    config: {
      // 登录？
      //swagger API文档
      tags: ['api', 'tests'],
      description: '测试hello-api'
    }
  },
]
