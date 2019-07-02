import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 路由钩子函数· 常用于登录 
router.beforeEach((to, from, next) => {
  // meta添加标题，路由，懒加载
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // if(document.cookie = '') {
  //   location.href ''
  //   this.SVGPathSegCurvetoQuadraticRel.push(to.path)
  // }
  next();
})