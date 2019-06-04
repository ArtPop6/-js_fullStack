import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 配置路由
import Look from '@/components/Look'
import LookOne from '@/components/LookOne'
import LookTwo from '@/components/LookTwo'


// 全局使用
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/look/:id',
      // name可以不写
      name: 'Look',
      component: Look,
      children: [
        {
          // 子路由不能有斜杠
          path: 'look-one',
          name: 'LookOne',
          component: LookOne
        },
        {
          path: 'look-two',
          name: 'LookTwo',
          component: LookTwo
        }
      ]
    },
    {
      path: '/detail',
      redirect: '/'
    }
  ]
})
