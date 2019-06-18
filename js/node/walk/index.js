const fs = require('fs');
const files = [];
// 一步步走下去 目录走下去
const walk = function(path) {
    // 把该目录所有东西给你
    fs
        .readdirSync(path)
        .forEach(file => { 
            const newPath = path + '/' + file;
            // 停下来得到是目录还是文件
            const stat = fs.statSync(newPath);
            console.log(stat);
            if (stat.isFile()) {
                // 点是运算符
                if (/\.js$/.test(file)) {
                    files.push(file);
                }
            } else if (stat.isDirectory()) {
                walk(newPath);
            }
            // if ()
            // item要不是文件 js文件？正则
            // 要不是目录  递归 在执行walk()
            // console.log(item);
        }) 
    // fs.readdir(path, function(err, items){
    //     console.log(items);
    // })
    // console.log('啦啦啦');// 很快执行
}

walk('./src');
console.log(files);