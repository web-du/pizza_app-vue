// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

//引入需要路由的模块
import Home from "@/components/Home"
import Menu from "@/components/Menu"
import Admin from "@/components/Admin"
import About from "@/components/about/About"
import Login from "@/components/Login"
import Register from "@/components/Register"



//使用路由
Vue.use(VueRouter)

//配置路由
const routes = [
  {
    path:"/",
    component:Home
  },
  {
    path:"/menu",
    component:Menu
  },
  {
    path:"/admin",
    component:Admin
  },
  {
    path:"/about",
    component:About
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/register",
    component:Register
  }
]

//把配置的路由放到实例化的路由中
const router = new VueRouter({
  routes,
  mode:"history" //采用h2的history跳转
})

Vue.config.productionTip = false

/* eslint-disable no-new */
//最后把路由放到Vue中运用
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
