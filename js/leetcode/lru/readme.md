LRU 缓存 最近最少使用原则
Least Recently Used
操作系统

node  fs sync 硬盘， 内存
内存精贵，开多了就慢
硬盘用不完

内存是代码的运行空间  有限的   2
存放变量 2个
3个来了怎么办？

<!-- 1 put(1)
2 put(2)
3 放不下了 1 2要滚蛋 -->
[]数组就是内存， length只能是2
 原则： 最近最少使用

 1  put(1,1)
 2  put(2,2)
 3  get(1)  取值  返回1  1最近使用，2最近最少使用?
 4  put(3,3) 3进去了，2就要丢掉
 5  get(2)  拿不到
 6  put(4,4)  4  3  丢了1
 7  get(1) 找不到了  -1
 8  get(3) 3
 9  get(4) 4

 - cache     LRUCache(大写表示对象)
   两个方法:
   get
   set

 - 对象字面量有利于get set方法的实现
 - 最近最少使用，JSON搞不定因为没有先后顺序。数组可以，[0] [length - 1]
   在一头进行操作unshift
   一半的工作交给数组，  一般的工作交给JSON对象字面量
   让他们成为LRUCache的两个属性

 - get set arr + obj 组织在 LRUCache
   indexOf  pop  unshift  splice
 
