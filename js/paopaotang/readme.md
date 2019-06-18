class 类 js 现在也有了，
es5 没有class关键字？ 怎么做面向对象呢？
js 是面向对象的， Function 是一等对象
普通函数 Player() 
new Player(); 作为类的构造函数被运行，
function Player() { this }
this 一直都在， 函数里的一个常在，指针 this 指向一个object {}  this.name在结构函数中传入

函数运行方式的不同， 里面this指向不同
普通函数被运行时， this指针没有使命， 全局，前端window， node指向global  unndefined
函数作为构造函数被运行时，new player(); this会指向 实例化的对象   构造函数需要的过程,
类则函数名啊大写

- 函数可以用来构造类 js 借东风，通过this
- this是一直存在的，指针
  函数的运行方式导致this指向不一样
  普通函数 this=>全局window||global
  如果代码启动严格模式， this 则会 undefined,规避乱指
- new过程中发生了什么
  new Player(); 将函数作为构造函数运行，
  this 会指向 Object {}


  this => { } CONSTRUCTOR
  this.name = name
- 构造函数
