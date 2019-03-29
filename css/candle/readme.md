1. mixin 与函数的区别
    mixin 是一段样式的封装, 可以在引用的地方复用 stylus 是用的最多的
    函数是有返回值的, random(min, max)
2. stylus 有内置的函数库
     floor math(0, 'random')
     unit(, 'px')
3. 200个元素 stylus for循环
   for num in 1..200
      .g-ball:nth-child({num})
           $width = random(0, 40)
           width unit($width, 'px')
4. filter contrast (20) 成为明亮黄色
   mix-blend-mode: screen;