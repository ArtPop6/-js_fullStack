// 一个页面(浏览器)从输入url到页面加载显示完成，这个过程发生了什么
// 输入url  判断缓存(cookie等缓存机制，看有无东西，有直接取出看)  DNS解析(前面主体，解析域名谷歌服务器服务器一步步往外找南昌-外网找到www.guge,给ip地址) 
// helloTCP链接(TCP协议)3   发送http请求  服务器处理并返回http报文 浏览器渲染页面 关闭tcp连接
// 1、浏览器的地址栏输入URL并按下回车。
// 2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
// 3、DNS解析URL对应的IP。
// 4、根据IP建立TCP连接（三次握手）。
// 5、HTTP发起请求。
// 6、服务器处理请求，浏览器接收HTTP响应。
// 7、渲染页面，构建DOM树。
// 8、关闭TCP连接（四次挥手）。

// VUE双向数据绑定如何实现的，diff definedProperties
// vue使用diff算法判断虚拟dom树。通过definedPro 拦截修改数据，放到新的dom树上，替换原来的。生命周期方法驱动只替换变化的标签，只刷新变化的地方
// 属性拦截 object.definedProperty  拦截原型链添加$.app
// 全局变量全局函数 a对象
// MVVM 数据驱动怎么实现的 defineproperty数据拦截
const a = {
    b: 1
}
function b() {
    console.log('a的值发生改变', a.b)
}
// a一旦变化就打印 使用数据驱动页面的原理
function bindData() { // 拦截a调用渲染方法b，b相当于渲染页面方法，数据源发生变化的话
    // Object.keys方法会返回一个由一个给定对象的自身可枚举属性的数组 key为每一项
    Object.keys(a).map(key => {
        let v = a[key] // es5 a._
        // 方法贼重要 dp方法新增属性或修改原有属性 参数 拦截谁 加上属性 并返回最新的对象
        // key修改每一项属性dp自带get set 方法
        Object.defineProperty(a, key, {
            get() { // 读取属性时调用的方法
                console.log('正在读取a里面的值')
                return v
            },
            set(newA) { // 写入属性时调用的方法A(接收参数)最新的值
                v = newA
                // 调用render方法 发生变化b会调用，render调用 有diff算法比较dom结构区别
                b()
            }
        })
    })
}

bindData()
a.b = 3
