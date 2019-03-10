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




//配置路由
export const routes = [
    {
      path:"/",
      name:"homeLink",
      components:{
          default:Home,
          'orderingGuide':OrderingGuide,
          'delivery':Delivery,
          'history':History
      }
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