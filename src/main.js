import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import axios from 'axios'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import OrderListPage from './pages/orderList'
import DetailWebStorm from './pages/detail/webStorm'
import DetailEclipse from './pages/detail/eclipse'
import DetailAxure from './pages/detail/axure'
import DetailEditPlus from './pages/detail/editPlus'
import store from './store/index'

Vue.use(VueRouter)
// 将 axios 改写为 Vue 的原型属性
Vue.prototype.$ajax = axios
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/webStorm',
      // 子路由
      children: [
        {
          path: 'webStorm',
          component: DetailWebStorm
        },
        {
          path: 'eclipse',
          component: DetailEclipse
        },
        {
          path: 'axure',
          component: DetailAxure
        },
        {
          path: 'editPlus',
          component: DetailEditPlus
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: {Layout}
})
