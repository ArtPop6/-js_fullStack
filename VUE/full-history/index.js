var http = require('http');
var fs = require('fs');
// 前端路由,  带来更好的单页应用的 用户体验   加载更快，没有白屏  vue-router  根据路由配置components
// 后端路由 http server是一定少不了的  /api接口  数据  ajax 全栈能力  

http.createServer(function(req, res) {
    var filepath = '.' + req.url;
    if (filepath === './') {
        // 前后端路由的交接
        filepath = './index.html';
    }
    // 用户进来，要让用户返回东西就要res
    readFile(filepath, res);
}).listen(80);

function readFile(path, res) {
    fs.readFile(path, 'utf-8', function (err ,data) {
        if (err) {
            readFile('./index.html', res);
            // throw new Error('出错了');
        } else {
            res.write(data);
            res.end();
        }
    });
}
