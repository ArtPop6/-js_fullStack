# q16 类的创建与继承

# q17 ios点击屏幕300ms延迟 因为移动端允许双击放大，支持这个所以，点一下300ms后没有第二下 则是点击页面。有第二下放大。提高用户体验，解决300ms延迟
# click在ios手机上有300ms延迟的原因，即解决的方法
1. <meta>标签 <meta name="viewport" content="width=device-width, initial-scale=no"> 禁止缩放，则没有了功能
2. 若想要放大页面又不要延迟 node包 npm insall FastClick, 其原理是: 监测到touchend事件后，立刻发出模拟click事件，并把浏览器300ms之后真实发出的事件阻断

# q18浏览器三大存储机制localStorrage sessionStorage cookie区别
1. 存储大小区别 cookie 4kb
    Cookie: 数据始终在同源的http请求中携带(即使不需要)  cookie数据一定会传到后台，即cookie在浏览器和服务器之间来回传递，只要有接口请求，就会上车一起走。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie还有路径(path)的概念，可以限制cookie只属于某个路径下，存储大小只有4k左右

    sessionStorage: 会在关闭浏览器窗口时失效，仅在当前浏览器窗口关闭前有效，不能长久保存。

    localStorage: 在所有的同源窗口都是共享的，cookie也是在所有同源窗口中是共享的，localStorage的大小在5M左右  返回token值，一般放cookie里。token有时效

# q19 new实现了什么 让对象隐士原型=构造函数显示原型  源码实现 new方法实现 promise方法实现


