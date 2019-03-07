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

//二级路由
import Contact from "@/components/about/Contact"
import Delivery from "@/components/about/Delivery"
import History from "@/components/about/History"
import OrderingGuide from "@/components/about/OrderingGuide"

//三级路由
import Phone from "@/components/about/contact/Phone"
import PersonName from "@/components/about/contact/PersonName"


//使用路由
Vue.use(VueRouter)

//配置路由
const routes = [
  {
    path:"/",
    name:"homeLink",
    component:Home
  },
  {
    path:"/menu",
    name:"menuLink",
    component:Menu
  },
  {
    path:"/admin",
    component:Admin,
    //路由独享首位
    // beforeEnter:(to,from,next) => {
    //   alert("非登陆状态，无法访问");
    //   next("/login")
    // }
  },
  {
    path:"/about",
    component:About,
    redirect:'/history',
    children:[
      {
        path:'/about/contact',
        name:"contactLink",
        component:Contact,
        redirect:'/phone',
        children:[
          {
            path:'/phone',
            name:"phoneNumber",
            component:Phone
          },
          {
            path:'/personname',
            name:"personName",
            component:PersonName
          }
        ]
      },
      {
        path:'/delivery',
        name:"deliveryLink",
        component:Delivery
      },
      {
        path:'/history',
        name:"historyLink",
        component:History
      },
      {
        path:'/orderingGuide',
        name:"orderingGuideLink",
        component:OrderingGuide
      }
    ]
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/register",
    component:Register
  },
  {
    path:"*",
    redirect:'/'
  }
]

//把配置的路由放到实例化的路由中
const router = new VueRouter({
  routes,
  mode:"history" //采用h2的history跳转
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
  components: { App },
  template: '<App/>'
})
