import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        /**
        * 末尾不加/ 路由跳转将无法传参
        * 历史模式 每个路由参数必须写明在路由声明里且参数名称相同
        * 如果不写明参数，参数依旧可以传递，但是页面一旦刷新，隐式的参数将丢失，url中的参数依旧还能保留
        * @module router.history
        */
        //隐式 刷新页面参数清空
        path: '/translate/',
        name: 'translate',
        component: () => import('./views/css/translate.vue')
        //不清空，但是所有的参数都得显示的拼接在url后面
        // path: '/translate/:fullName',
        // name: 'translate',
        // component: () => import('./views/css/translate.vue')
      },
      {
        path: '/transition/',
        name: 'transition',
        component: () => import('./views/css/transition.vue')
      },
      {
        path: '/animation/',
        name: 'animation',
        component: () => import('./views/css/animation.vue')
      },
      {
        path: '/apply/',
        name: 'apply',
        component: () => import('./views/css/apply.vue')
      },
      {
        path: '/flex/',
        name: 'flex',
        component: () => import('./views/css/flex.vue')
      },
      {
        path: '/linear-gradient/',
        name: 'linear-gradient',
        component: () => import('./views/css/linear-gradient.vue')
      },
      {
        path: '/eventDelegation/',
        name: 'eventDelegation',
        component: () => import('./views/javascript&dom/eventDelegation.vue')
      }],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
