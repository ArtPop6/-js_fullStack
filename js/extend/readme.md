Person 由prototype属性来解决他自身构造之外的原型上的属性或方法
原型对象会有他的构造函数 Person.prototype.constructor属性
只要是原型对象就有constructor属性
第三者？   实例 
实例 跟 Person 有什么关系， person.prototype 有关系

构造函数<->构造函数原型<-实例

js实例跟类其实不是java等语言的血缘关系 
zl 实例是怎么来的？
new Person() 出来的
1. Person函数运行 new 的方式, this=>new Object();
2. zl 怎么拿到 Person.prototype原型对象上定义的方法 因为都有 __proto__ 属性
3. 方法有prototype属性, 值为对象 开支
4. 任何对象一定有 __proto__ 属性指向它的原型对象
5. 原型对象上有一个额外的constructor属性指向谁是它的构造函数

原型链 
Person.prototype.__proto__ === Animal.prototype
父类的实例对象转化成子类的原型对象。
