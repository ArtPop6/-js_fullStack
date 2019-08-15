## for of 
用于遍历 可迭代 对象
比如: array, map, set, string, 
可迭代对象有两个要求
1. 必须要存在symbol.iterator 属性，自己的或原型链上
2. 迭代器协议
实现一个next方法，即symbol.iterator是一个方法，返回next属性
```
[Symbol.iterator] = () => ({
    next: () => {
        return {
            done: 
            value:
        }
    }
})
```
可以自定义 for...of 行为，加两个对象就可以了
