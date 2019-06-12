window.history.pushState({}, null, '/tabao')
undefined
前端路由实现方式 history.pushState(data, title, url) 改变url的path部分，跟hashChange实现方案不一样的地方是改变的url部位不一样(#home),前端就可以来处理路由了
像极了后端路由, 支持前后切换, 
浏览历史， history（栈两个api实现）  接管了这个超链接之后就push这个状态，后退就使用onpopstate
push  pop  数组只在尾部操作