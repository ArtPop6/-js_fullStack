// -也是单词一部分  取反
const words = (str, pattern=/[^a-zA-Z-]+/) => str.split(pattern);
console.log(words('I love javascript!!'));
// 字符串es6方法与正则
