import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import menuNav from  "@/components/menuNav"
import Mylove from "@/components/mylove"
import menus from "@/components/menus"
import index1 from "@/components/index1"
import index2 from "@/components/index2"
import index3 from "@/components/index3"
import index4 from "@/components/index4"


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Mylove',
      name :"Mylove",
      component:Mylove
    },
    {
      path:'/menus',
      name :"menus",
      component:menus,
    },
    // {
    //   path:'/menuNav',
    //   name:'menuNav',
    //   component:menuNav,
    // }
   
  ],

})

export const personMenu =[{
  path:"/menus",
  component:menus,
  name:menus,
  meta:{
    title:"首页",
    icon:"el-icon-success",

  },
  
  children:[{
    path: "/index1",
    title:"第一个页面",
    name:'index1',
    component:index1,
    meta:{
      title: "第一个页面案例",
      icon: "el-icon-goods",
    }

  },
  {    path: "/index2",

    title:"第二个页面",
    name:"index2",
    component:index2,
    meta:{
      title: "第二个页面案例",
      icon: "el-icon-goods",
    }
  },
  {
    path: "/index3",
    title:"第三个页面",
    name:"index3",
    component:index3,
    meta:{
      title: "第三个页面案例",
      icon: "el-icon-goods",
    }
  },
  {
    path: "/index4",
    title:"第四个页面",
    name:"index4",
    component:index4,
    meta:{
      title: "第四个页面案例",
      icon: "el-icon-goods",
    }
  }
]
}]
