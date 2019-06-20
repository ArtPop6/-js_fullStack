import React from 'react';

export default class Child extends React.Component {
    state = {
        count: 0,
        childCount: 0,
        // 是否显示子组件
    }
    
    handleChildCountChange = () => {
        let {childCount} = this.state;
        childCount ++;
        this.setState({
            childCount
        })
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        // 子组件内容不在了还在set interval
        this.interval = setInterval(() => {
            console.log('child setInterval')
        }, 1000)
        console.log('componentDidMount')
    }
    // props更新的
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    // 组件性能优化的时候需要的，控制不必要的更新 next新的props
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldCompoentUpdate')
        if(nextProps.count !== this.props.count) {
            return true;
        }
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        console.log('componentWillUnmount');
    }
    render() {
        const { count } = this.props;
        const {childCount} = this.state;
        console.log('render function')
        return (
            <div>
                <button onClick={this.handleChildCountChange}>
                    child state change
                </button>
                child Component
                count: { count }
                childCount: {childCount}
            </div>
        )
    }
}

