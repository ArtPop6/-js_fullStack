// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Toast, Loading } from '@/common/plugin'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './vuex/store'

import def_lazy_img from '../static/img/loading.gif'

Vue.use(VueLazyload, {
  loading: def_lazy_img,
})
// 防抖 节流  会有多个请求，浪费资源 点击后没有返回就不能点第二次 懒加载，图片很大就会放个loading加载中

fastclick.attach(document.body)

Vue.use(Toast)
Vue.use(Loading)

Vue.config.productionTip = false

/* eslint-disable no-new */
// vue本身的东西。在此声明，不是亲生的就use
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
