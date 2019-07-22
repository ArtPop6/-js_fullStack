import { createElement, render, renderDOM } from './element';
// ul.list>li.item*3
// 创建一颗虚拟dom树
let virtualDOM = createElement('ul', {
    class: 'list'
}, [
    // 到文本节点就不会往下找
    createElement('li', { class: 'item' }, ['周杰伦'])
    ,
    createElement('li', { class: 'item' }, ['王力宏'])
    ,
    createElement('li', { class: 'item' }, ['林俊杰'])
]);

console.log(virtualDOM);
let el = render(virtualDOM);
renderDOM(el, document.getElementById('root'));

