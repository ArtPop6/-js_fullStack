'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var a = 1,
    b = 2,
    c = a + b;
console.log(c);
// es6不支持 promise const let await es8 es9  IE有些浏览器不支持
[1, 2, 3].map(function (item) {
    return item + ' item';
}); //es6不是所有浏览器都支持
// es6大部分功能es5都能实现 只不过不够优雅
var xlz = { name: '范玲子', hometown: '吉林' };
xlz = _extends({}, xlz, { "company": '新浪' // es6展开
    // 报错
});console.log(xlz);
