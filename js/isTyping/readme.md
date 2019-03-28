类型检测判断是js 考点

<!-- new Array() [] -->
Object 
Array 可遍历的对象
JSON object 对象字面量 可枚举的 for(key in)
function 是一等对象 

call手动指定函数中this指向

typeof 不靠谱

1. Object.prototype.toString() 原型上的方法 弥补typeof半吊子,  [] 返回值是 "[object object]" 告诉自身的类型
2. 借给Array 用 Object.prototype.toString.call([])  函数上就有call, 动态制定内部this的指向 简单类型不是对象 没有prototype属性
Object.keys(Type)
(3) ["isString", "isArray", "isNumber"]

3. js 的面向对象
   Type{isString}
   toString细节返回类型， 怎么把他封装起来

4. 立即执行函数 + 嵌套函数定义 闭包
 type 就在这些嵌套函数被调用时可以引用到


