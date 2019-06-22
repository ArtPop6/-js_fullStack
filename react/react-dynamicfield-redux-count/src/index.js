import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Counter from './Counter';
import countReducer from './reducer'
import * as serviceWorker from './serviceWorker';

// reducer一个方法，返回0 getState拿到
let store = createStore(countReducer);
ReactDOM.render(<App />, document.getElementById('root'));
// onincrement更改store
const renderCount = () => {
    ReactDOM.render(<Counter value={store.getState()} onIncrement={() => {
        // dispatch action对象，要干什么，带什么数据
        store.dispatch({
            type: 'INCREMENT'
        })
    }} onDecrement={() => {
        store.dispatch({
            type: 'DECREMENT'
        })
    }}/>, document.getElementById('redux'));
}
// 应用一打开执行
renderCount()
store.subscribe(() => {
    console.log(store.getState())
    // 状态改变执行
    renderCount()
})
serviceWorker.unregister();

// reducer方法 action对象