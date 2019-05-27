- 正则知识点
  贪婪匹配 重复匹配一个模式
  [0-9]+
  + 一次或多次
  * 零次或多次
  ^ 的第二种用法
  [^>] 只会匹配一个字符
- 函数参数
  写一个函数，返回最大的两个数
  [2,6, 'a']   [8,4,6] [10]  不管有多少个
  [10, 8]  es6 API
  1. Math.max 最便宜的求最大值
  2. ...args  spread运行符  展开一个数组
  3. n个数?  slice方法 
  综合题

- args
  1. map + spread 运算符
  2. 闭包
    遍历每一项,
    取前两个  slice + n + Math.max()
    求最大值
    .map
      .slice
      Math.max()

    map每一项接收的就是callback
    callback取前两个 + 求最大值  作为一个功能
    Math.max.slice(n)  
