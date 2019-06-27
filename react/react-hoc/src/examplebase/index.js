// 修饰符就是一个函数 defineProperty(obj, key, {
//     value: ''
// })
// Object.defineProperty(Base, 'add', { value: () => {}, //...})定义add方法
// descriptor 拿到了Add这个方法的 descriptor
// function log(target, name, descriptor) {
//     const method = descriptor.value;
//     descriptor.value = function(...args) {
//         // 运行之前输出
//         console.log('log type: add');
//         return method(...args);
//     }
// }
// 修饰符增强日志功能
function log(logType) {
    return function(target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function(...args) {
            // 运行之前输出
            console.log('log type:' + logType);
            return method(...args);
        }
    }
}
// 修饰符 是一个函数 接受一个参数
// @log log是一个函数
// @log('add') @log('divide') 也得是一个函数 返回一个函数
class Base {
    // 调用add自己输出一条
    @log('add')
    add(a,b) {
        // console.log('log type add:')
        return a + b;
    }
    @log('divide')
    divide(a,b) {
        return a / b;
    }
}
const base = new Base();
// 接收参数，就不会是NaN
console.log('add', base.add(1, 2));
console.log('divide', base.divide(4, 2));
// 加日志
//有了更好，没有也行 装饰器

export default base;