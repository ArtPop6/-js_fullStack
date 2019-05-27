// 高阶函数的考题 数量n  
// ary运行结果就是函数
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
const firstTwoMax = ary(Math.max, 2);
// 二维数组  x每一项都是数组
console.log([[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)));
