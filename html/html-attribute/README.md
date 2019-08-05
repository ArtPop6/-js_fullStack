## script
- script下的东西执行两个步骤
    1. 下载    2. 执行
1. async属性
    1. html parse(解析)与下载是并行的
    2. 下载完就执行 顺序无法控制
2. defer
    1. html parse / 下载 并行
    2. 整个文档加载完成之后 按照script 在文档出现的顺序
3. 没有属性的时候
    1. html parse 和 js 下载 执行都是互斥的
 
## crossorigin
用于 可以引入跨域资源的标签 : img link css script
crossorigin 代表要协商跨域（后端）
后端没设置Access-control-*  就会出错。
1. anonymous
    如果使用了这个值，会在请求头中加一个origin属性
    如果未设置cross， 跨域 js 发生了错误,将会同 window.onerror 提供很少的信息，通过crossorigin 属性得到详细的信息
