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

## 换主题功能 red blue
最外面state定义 信息一层层传下去
// parent state 点击蓝色，则修改最外层state
{
    theme: 'red'
}
要将theme层层传递
父组件 -> 子 -> 孙
Context跨层及

cnpm i prop-types -S

context数据对于自组建是全局数据， vuex也是全局，改变也很麻烦。
1. 父组件 通过 getChildContext 返回提供的 context内容
2. 父组件.childContextTypes 定义提供的 context 类型
3. 子组件 获取 .contextTypes 定义接受的类型 this.context 获取


问题:
跨层级传递的时候，假如中间某一组件 shouldComponentUpdate return false 了之后 导致后代不会更新 context的数据不能同步

16.xxx-
1. 构造 Provider Consumer
2. 父组件 <Provider value={} /> 提供组件
3. 后代组件 <Consumer>{ () => () }</Consumer>获取数据

state = {
    theme: 'purple',
    toggle: this.handleToggletheme
}
静态属性 无法获取 实例的 this

/post/abcdefg

?type=all&a=1
页面去另一个页面。search，或match方式传数据
定义组件 function或class管理组件状态state

## function && class 
function component (dumb component) 哑巴 只做一件事: 根据 （父组件）props 渲染， 不会依赖任何东西 性能好

class component( smart component) 负责状态管理  复杂，依赖于其他组件