import React from 'react';

class Child1 extends React.Component {
    state = {
        a: 1
    }
    // 更新state
    // 根据返回值， 返回对象{}
    // 不更新 return null
    /**
     * 把props state揉在一起
     * 以前willmount props setState
     */
    static getDerivedStateFromProps(props, state) {
        console.log('getDriverStateFromProps', props)
        // return null;
        return {
            ...props,
            ...state
        }
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    // 更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return 888;
    }
    // a === undefined 15.x
    // a === getSnapshotBeforeUpdate 16.x
    componentDidUpdate(preProps, preState, a) {
        console.log('componentDidUpdate');
    }
    handleStateChange = () => {
        this.setState({
            a: 10
        })
    }
    render() {
        console.log('渲染时候 state', this.state);
        return (
            <div>
                <button onClick={this.handleStateChange}>
                    stateChange
                </button>
                child1 Component
                { this.props.count }
            </div>
        )
    }
}

export default Child1
