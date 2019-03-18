如何实现红包算法
固定金额的红包， 由若干人来抢， 规则？

1. 抢到金额之和等于红包金额，不能超过， 也不能少于。
2. 手气王， 0.01 至少，
3. 金额随机， 随机数， 公平， 每个人抢到金额的概率要相同

计算过程， 变量计算的本质
发钱？  total = restAmount--
resetNum-- == num
随机一次， restAmount = restAmount-随机数
restNum--
最后一个人， 拿最后的钱 for(i=0; i < num-1; i++)
每次随机， 钱数是我们需要的， push 数组里，
总和， 

Math 是数学对象
Math.random()
parseFloat() 字符串或随机数解析为浮点数
类型转换 "23.1" => 23.1   parseFloat
0-9 之间的整数
let max=100;
let min=0;
最小值与最大值之间的随机数
min + Math.floor(Math.random()*(max-min));

