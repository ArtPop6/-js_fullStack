// [1, 2, 3, 4] 求出它的平均值
// let a = [1, 2, 3, 4];
// const len = a.length;
// for (let i = 0,sum = 0; i< a.length; i ++) {
//     let sum = 0
//     let sum = sum + a[i];
// }
// let ave = sum/len;
// console.log(ave);
const average = (...nums) => nums.reduce((acc, val) => acc+val, 0) / nums.length // rest运算符
console.log(average(...[1,2,3,4])) //spread运算符