- 抽象能力 ADT抽象的数据的结构，需要由具象来引导
- 解决特定问题 
  1. leetCode 数据结构题 LinkedList
  2. github algorithm OO写法
  封装成为一个class  export default
  3. webpack 可见即可得

- 有一个链表 服务于各种算法
1->4->3->2->5
存放数据， 不连续的
head 1

- 节点构成链表 node(n)->linkedList
  模块化 只要引入就可以 一个文件一个类
  es6的模块化
  实现append()方法
- index.js 
  业务代码 
  Unexpected identifier

- node 不支持es6的 模块化
  原生支持的require commandJS
  所以要compile或presets(预处理)一下
   yarn add babel-cli babel-core babel-preset-env -D
   "babel-loader": "^7.1.4",

   src下开发目录
   index.html模板文件

- ADT
  抽象数据类型
  链表 数据结构 配套方法
  append() 
  toString() 随时查看链表存的数据是否正确
  toArray() 

head = 1->4->3->2->5->2   x = 3
对链表进行分隔， 小于x的节点放在左边，大于等于x的节点放在其后，不影响之前的顺序
1->2->2   左链表  之前的
4->3->5   右链表  之后的
1->2->2->4->3->5
链表 head tail apped()
两个链表首尾相连: tail.next = head2