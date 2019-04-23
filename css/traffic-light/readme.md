#js中的假值 其他都是真值
undefined
null
false
+0
-0
NaN
""
做强制类型转换也还是假值

1 == true
true
2 == true
false

true,false是bool值
bool值转换成数字类型
Number(true)
1
Number(false)
0
2 == false
false

valueOf找一个对象的原始值
[].valueOf().toString()
""

[] == ![]