// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {routes} from './routers'
import axios from 'axios'
import {store} from './store/store.js'
//使用路由
Vue.use(VueRouter)


//配置默认的根路径
axios.defaults.baseURL = 'https://wd1522943092wgreok.wilddogio.com/'


//配置Vue原型(在任何组件中都可以正常使用axios:this.axios)
Vue.prototype.axios = axios;


//把配置的路由放到实例化的路由中
const router = new VueRouter({
  routes,
  mode:"history", //采用h5的history跳转
  scrollBehavior(to,from,savedPosition){
    //return{x:0,y:100}
    // return {
    //   selector:".btn"
    // }
    // if(savedPosition){
    //   return savedPosition
    // }else{
    //   return {x:0,y:0}
    // }
  }
})

//全局守卫
// router.beforeEach((to,from,next) => {
  //to:你要进入哪个路由，from:你从那里离开，next:是否展示路由页面
  //alert("还没有登陆，请先登录！");
  //next();
  //console.log(to)  能拿到你当前要跳转的路径

  //判断store.getters.islogin == false（当你的状态没有登陆时）
  //当你要跳转的路由为登录或者注册时，就展示出来
  // if(to.path == '/login' || to.path == '/register'){
  //   next();
  // }else{
  //   //给出友善的提示，并引导至登陆页
  //   alert("请先登录");
  //   next('/login');
  // }
// })


//后置钩子:没有next的控制:很少有使用场景
// router.afterEach((to,from) => {
//   alert("after each")
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
//最后把路由放到Vue中运用
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
