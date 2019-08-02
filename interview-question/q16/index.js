// 动物构造函数 name属性 sleep方法  给这个函数原型链增加方法  es5里这就是一个类实例化后有属性方法  class是es6帮创建类的东西
function Animal(name) {
    this.name = name 
    this.sleep = function() {
        console.log(this.name + '睡着了')
    }
}

Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃' + food)
}

// 原型链的继承 让他继承animal构造函数
// function Cat() {
//     // 构造函数new的实例 让cat继承了animal构造函数上拥有的属性方法
    
// }
// // 大写构造函数
// // 拥有animal属性方法 new出的实例，proto=原构造函数的prototype
// Cat.prototype = new Animal()
// // 指定name值
// Cat.prototype.name = 'cat'
// var cat = new Cat()
// console.log(cat.name)
// console.log(cat.eat('fish'))
// console.log(cat.sleep())
// console.log( cat instanceof Animal ) // true 判断复杂数据类型 object.prototype.toString.call检验类型
// console.log( cat instanceof Cat) // true

// -----构造函数的继承
// function Cat(name) {
//     // animal里面this作用域掰到cat里  cat的this作用域能访问animal作用域
//     Animal.call(this)
//     // name没有的话默认给tom
//     this.name = name || 'Tom'
// }
// var cat = new Cat('wn')
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat instanceof Cat) // true 因为是new出来的
// console.log(cat instanceof Animal)  // false  instanceof原理判断隐式原型=显示原型 原理 因为Cat构造函数原型链没有，只是作用域能访问到animal作用域而已。所以

//--- 组合继承 原型与构造函数继承的组合
// function Cat(name) {
//     // animal里面this作用域掰到cat里  cat的this作用域能访问animal作用域
//     Animal.call(this)
//     // name没有的话默认给tom
//     this.name = name || 'Tom'
// }
// // new出的实例隐士原型= 构造animal显示原型
// Cat.prototype = new Animal()
// let cat = new Cat()
// console.log(cat.name)
// console.log(cat.sleep)
// console.log(cat instanceof Cat)
// console.log(cat instanceof Animal)

//------寄生组合继承
function Cat(name) {
    Animal.call(this)
    this.name = name || 'Tom'
}
// b不是构造函数，无法new，继承函数A的构造函数
(function() {
    // 创建一个没有实例方法的类 构造函数一定要名字 匿名函数不是构造函数
    var Super = function() {}
    // super 就变成有实例方法的类了
    Super.prototype = Animal.prototype
    Cat.prototype = new Super()
})()
var cat = new Cat()
console.log(cat.name)
console.log(cat.sleep)
console.log(cat instanceof Cat)
console.log(cat instanceof Animal)
