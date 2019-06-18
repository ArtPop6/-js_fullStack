// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'; // mvvm
import App from './App.vue'; //跟组件
import store from './store'; //统一管理应用状态
// spa
new Vue({
  el: '#app',
  store,
  // app内部好多组件，混合到一起挂载到由h去handle编译最后render到这个节点
  render: h => h(App)
})

