// 配置模块化  引入到app.js之中 node连数据库密码等。。.gitignore添加.env
require('env2')('./.env')
// process 拿到env配置文件所有东西 进程中解构env
const { env } = process;
console.log(env)
module.exports = {
    host: env.HOST,
    port: env.PORT
}