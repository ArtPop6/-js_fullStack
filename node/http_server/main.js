{/* <script src="./http"></script> */}
// require 关键字 引入一个模块， COMMONJS引入模块的机制定义规范
const http = require('http');
let i = 0;

http
    .createServer(function(request, response) {
        response.end(`Hello World!${++i}`);
    })
    .listen(3000);
