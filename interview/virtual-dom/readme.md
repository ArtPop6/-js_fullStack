- vue react  mvvm思路
  不去做DOM这一件非常耗费性能的事
  不用去直接操作DOM, 操作data...  将mvvm的修改(DOM片段) 更新到页面上去。
  让前端应用到了SPA时代，不卡 -> PWA应用 SPA -> Application 性能特别好

  DOM是一棵树
  ComponentA   render(JSX) replaceChild替换节点 方法   ->   DOM树上
  替换节点性能差 把旧节点扔掉 ? 组件对应的树， 遍历
   Tag  都是树里的 node
   不是替换新的节点 属性发生了改变 style
   文本改变了  innerText改变
   append  li*n
   childTag递归

    oldState   oldTree
    newState   newTree ? virtual DOM 遍历完后的修改
    DOM树 不会急着生成，是最后一站
    oldState DOM树的 描述  JS版本的DOM树  状态改变先找js dom树 要真实的就render 比较用diff算出来，再在dom树上就修改那一只
    所有涉及dom操作都性能低下(dom脆弱)

    真实的DOM树， 在内存中有JS virtual DOM 耗cpu，把每个节点比较，不一样的地方拿出收集，在作用于真实的dom树上加上。

- elementObj => 新的virtualDOM diff一下比较之前的virtualDOM => 相差的形成一个补丁 补上DOM
      1
    2     3（9）                         改变用花括号
 4    5 6    7（8）   两个补丁 做一个数组  [{ patch: 9, index: 2}, {value: 8, index: 6 }]
- 先序深度遍历
- Patches []  dom diff算法
- 给DOM打补丁
