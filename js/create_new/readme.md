new的时候发生了什么？

构造函数的运行方式是以new的方式被运行，所以函数内部的this是动态的
内部的this 动态指向实例化的this.

空对象？ 开始时是空的
        之后， 拿到了构造函数里的属性
        最后又拿到了prototype上定义的属性和方法
        instanof是否是某个类的实例
对象？ 有属性和方法构成

1. 实例化一个新的对象，并且是这个类的实例
2. 构造函数被执行， this 指向实例，
construtor 运行慢半拍
  在面向对象里构造函数是为他人服务的， 为this服务， this由函数的运行方式决定
  this—> 实例 new方式
  this-> 任何对象 call

3. Otaku.prototype  值是对象
原型对象
任何函数都拥有一个prototype属性  才能构建类
火车 constructor 车头,
车头上勾着车身