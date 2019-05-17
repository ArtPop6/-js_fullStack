// node包 http https
const https = require('https');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
// 服务端的 $ jquery
const url = 'https://movie.douban.com/top250';
const imageDir = './images/';
function spiderMovies(start) {
    https.get(url + `?start=${start}`, (res) => {
        res.setEncoding('utf-8');
        // 源源不断收到数据
        let html = '';
        res.on('data',(chunk) => {
            html += chunk;
            // console.log(chunk);
        });
        // 数据接收完毕
        res.on('end', () => {
            // 发送完毕就可以用html jquery选用图片
            const $ = cheerio.load(html);
            // 回调函数
            let movies = [];
            $('.item').each(function() {
                // 循环的时候对应的pic  否则就只有第一张图片 this代表在哪个作用域之内查找， this代表了每一个item每一个电影
                // 不加this则默认全局，所以每次都找到第一张
                const picUrl = $('.pic a img', this).attr('src');
                const title = $('.title', this).text();
                // 
                const star = $('.info .star .ratting_num', this).text();
                // 入库 --- 
                const link = $('a', this).attr('href');
                const movie = {
                    title, 
                    star,
                    link,
                    picUrl
                }
                movies.push(movie);
                // console.log(picUrl);
                downloadImage(picUrl);
    
            })
            // 保存时告诉是第几页的数据 文件名上标志一下数据的页数
            saveLocalData(start / 25, movies);
        })
    })
}
//成功结果在res接口，分很多次拿到
const dataDir = './moviesData/'
function saveLocalData(page, movies) {
    // 文本信息  保存为json格式 变成字符串
    fs.writeFile(dataDir + `data${page}.json`, JSON.stringify(movies), (err) => {
        if(!err) {
            console.log('数据保存成功');
        } else {
            console.log(err);
        }
    })
}
function downloadImage(picUrl) {
    // 接受完后写到磁盘里
    https.get(picUrl, (res) => {
        // 文件内容一般是二进制
        res.setEncoding('binary');
        // 收到图片内容时
        let imageData =''
        res.on('data', (chunk) => {
            imageData += chunk;
        })
        res.on('end', () => {
            // fs模块读写 和原来名字一样p480747492.jpg
            // 成功失败回调
            fs.writeFile(imageDir + path.basename(picUrl), imageData, 'binary', (err) => {
                if (!err) {
                    console.log('image downloaded:', path.basename(picUrl))
                }
            })
        })
    })
}
// es6 generate函数可定义关键词yield 因为每查一次是异步
function* doSpider(x) {
    let start = 0;
    while (start < x) {
        yield start
        spiderMovies(start);
        start += 25;
    }
}
for (let x of doSpider(250)) {
    console.log('爬取', x);
}

