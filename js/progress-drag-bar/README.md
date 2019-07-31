1. 三个容器  背后 100%宽度 拖拽圆 已经拖了的进度条
2. touchStart touchMove touchend
3. 改变 width left 

```js
new Progress('selector', {
    onDrag: () => {},
    onDragStart: () => {},
    onDragEnd: () => {},
    progress: 0.5,
    disableDrag: false
})
```

浏览器地址栏输入url到页面出现执行过程:
hello 服务器 取数据
三次握手
bye
四次挥手