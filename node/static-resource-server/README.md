## 静态资源
- 不会随着服务运行而改变内容: HTML CSS JS 图片
1. 如果有index.html打开
2. 否则 列出所有文件
3. 请求路径 和 磁盘路径 一一对应

请求
/static/*.* 磁盘位置static目录下面 一一对应的
1. 拿到req.url
2. 读取 磁盘下面同一个位置 完毕后返回
3. 静态资源 通常会放在某一个目录下面 /static/ 所以请求都以某个目录开头  ^

## 打开方式 
file://开头的，本地文件读取协议  ./xx.png   ok
http://localhost:8080/     http协议不一样   all选项 所有请求 图片没有响应
html 里面引入的资源 都会发出请求
server is running 8080
/
/1555933750792.jpg
/favicon.ico


## 上传图片
- 处理用户提交过来的图片
### formidable
处理请求的第三方的包
fields 非input[type="file"]的提交项
files input[type="file"] 提交项
根据 input的name属性 来获取取值
localhost:8080/文件名 访问

html静态文件，响应快迅速。   后台mvc模式，服务器动态请求。
