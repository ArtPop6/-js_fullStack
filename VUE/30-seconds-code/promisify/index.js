const fs = require('fs');
// 加了工具包改造最新定义好的api
// const util = require('util');
// 定义一个函数
// const foo = () => {}
// foo 
// foo()
// 1 输入一个函数
const promisify = (func) => {
    // args promisfy 返回参数传参 改成多个参数
    // ...args会使它变成数组  ('./index.html', {}) -> ['./index.html', {}]
    // arguments 
    return (...args) => {
        return new Promise((resolve, reject) => {
            // 把数组里面的 每一项 一次展开
            func(...args, (err, data) => {
                if (err) reject(err)
                resolve(data); 
            })
        })
    }
}
// console.log( typeof fs.readFile );
// 
// prommisify包一层变promise 返回函数
const readFile = promisify(fs.readFile);
readFile('./index.html', { encoding: 'utf8' })
.then(res => {
    console.log(res);
})
// fs.readFile('./index.html', { encoding: 'utf8' }, (err, data) => {
//     if (!err) {
//         console.log(data);
//     }
// })
// // 查看文件属性 错误对象,执行结果 stat有两个 最后一个参数是回调函数
// fs.stat('.', (err, stats) => {
//     if (!err) {
//         console.log(stats);
//     }
// })