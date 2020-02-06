import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/Home.vue'

//1.安装插件
Vue.use(VueRouter)

//2.定义路由,配置对应的映射关系
const routes = [
  {
      path: '',
      redirect: '/home'//重定向
  },
  {
      path: '/home',
      name: 'home',
      component: Home
  },
  {
      path: '/category',
      name: 'category',
      component: () => import('../views/category/CateGory.vue')
  },
  {
      path: '/shopcart',
      name: 'shopcart',
      component: () => import('../views/shopcart/ShopCart.vue')
  },
  {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile/ProFile.vue')
  }
]

//3.创建router管理路由
const router = new VueRouter({
  mode: 'history',
  routes
})

//4.导出
export default router