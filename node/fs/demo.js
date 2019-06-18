// fs 模块 是后端node开发的一部分
const fs = require('fs');
// 读取文件内容是异步的，用回调函数解决异步，文件运行成功再运行 data读取数据
// fs.readFile('./a.txt', 'utf8', function(err, data) {
//     console.log(data);
//     fs.readFile('./b.txt', 'utf8', function(err, data) {
//         if(err) {
//             console.log(err);
//         }
//         console.log('-----------------', data);
//     })
// })

// 将callback处理异步的方案抛弃
const fileAPromise = new Promise((resolve, reject) => {
    // 花时间的任务放在里面
    fs.readFile('a.txt', 'utf8', (err, data) => {
        // 兑现诺言 流程的控权怎么移交
        resolve(data);
    })
});
const fileBPromise = new Promise((resolve, reject) => {
    fs.readFile('./b.txt', 'utf8', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data);
        }
    })
})
// 将内部的耗时任务运行起来
fileAPromise
    .then(data => {
        console.log(data);
        return fileBPromise;
    })
    .then(data => {
        console.log(data);
    })
