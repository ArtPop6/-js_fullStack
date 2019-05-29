const http = require('http');
// 解析请求的第三方的包 npm i formidable -S
const formidable = require('formidable'); 
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    // 确定是提交按钮的请求
    // npm init -y 初始化json文件
    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
        // 解析文件
        const form = new formidable.IncomingForm();
        // 下载到这
        form.uploadDir = './static/';
        form.parse(req, (err, fields, files) => {
            // fields 123456
            console.log(fields, files);
            // <input type="file" name="upload"></input>
            const oldPath = files.upload.path;
            const filename = files.upload.name;
            // 'static\\upload_2f94775e236c4768d341773245c27cec'
            const dirname = path.dirname(oldPath)
            // dirname === static/
            const newPath = path.join(dirname, filename);
            fs.rename(oldPath, newPath, (err) => {
                res.writeHead(200, {
                    'Content-Type': 'text/html;charset=utf8'
                });
                res.end('文件上传完毕');
            })
        })
        return false;
    }
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    });
    res.end(
        `
        <form action="/upload" method="POST" enctype="multipart/form-data">
        <!-- 点击后调起选择文件对话框 -->
        <input type="file" name="upload">
        <input type="text" name="nickname">
        <input type="submit" value="submit">
        </form>
        `
    )
}).listen(8080, () => {
    console.log('server is running port 8080')
})