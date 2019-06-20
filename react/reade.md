create-react-app life-cycle
## 挂载阶段
第一次渲染
componentWillMount
componentDidMount

## 之后走更新阶段
不走mount走update
return false不会再走后面的控制更新

state与props一样只是少了willreceiveprops

componentWillUnmount

## 更新阶段

shouldComponentUpdate
true 更新
false 不更新

componentWillUnmount
清理
定时器
全局的事件绑定，卸载了要一起卸载

挂载更新的不同