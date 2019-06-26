import React from 'react';
import ReactDOM from 'react-dom';
// 创建store 
import {createStore} from 'redux';
// Provider后代组件都能拿到数据,把store数据放到全局位子 cnpm i redux -S
import { Provider } from 'react-redux';
import reducer from './reducer/index'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const store = createStore(reducer);
console.log('store', store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// store.dispatch({})数据跟新
// store.subscribe(() => {
//     ReactDOM.render(<App />, document.getElementById('root'));
// })
//  recat-redux rdux数据与react联系在一起，。 redux管数据
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
