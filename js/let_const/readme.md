# 作用域 Scope
document DOM 
   getElementsByTagName
   getElementsByClassName
   querySelector
   querySelectorAll
window BOM 
   全局定义了 var name = "yh"
   全局变量 前段  js 全局就是window
   局部变量 function() { }
   window js 是内嵌在浏览器的脚本语言，它与其他语言不一样的地方在于有一个顶级的window
   全局变量挂载在windows上
   所以调用名字 console.log(name); console.log(window.name);都能找到全局里的名字
   window 类型 typeof 六种基本类型之外全是object： 数值，字符串，bool，undefined，Symbol ，null定义了没有值
   const let 比var 优秀的地方 遵守块级作用域
   全局 -> 函数局部 -> 块及作用域
   scope 范围

   setTimeout 异步的内置函数
   for 循环 立即同步执行
   1000 之后 i var 变成了10

   let 块级作用域  for{ 块级作用域 let}
   1000 后，循环的每一次