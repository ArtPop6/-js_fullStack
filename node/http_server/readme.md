- MVVM  前端前贵  npm init -y
Model 数据  Page({data: {
    legends:[]
}})
View  视图
WXML 
VM 表示要数据来填 {{}}  wx:for  ...

- MVC 经典的Web开发模式
  Model => SQL
  View => 静态页面
  Controller => 路由,来到路由把数据套一下

- http://localhost:3000/

- WebServer 软件程序
Web服务器硬件运行WebServer程序的
ip http协议  找到电脑
http://127.0.0.1:3000  端口  不只一个服务提供资源
3306端口做MYSQL服务, 
80  端口Web的服务
http
    .createServer(function(request, response) {
        respond.end('Hello World!')
    })  end给因为是http协议本质用完就走拿到页面就断开联系，收回资源，分资源给其他用户
    .listen(3000)
    // 创建一个服务器，等待人来
ip+端口号才能确定服务
