import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import menuNav from  "@/components/menuNav"
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
    {
      path:'/menuNav',
      name:'menuNav',
      component:menuNav,
      children:[
        {
          path:'index1',
          name:'index1',
          component:index1,
        },
        {
          path:'index2',
          name:'index3',
          component:index2,
        },
        {
          path:'index3',
          name:'index3',
          component:index3,
        },
        {
          path:'index4',
          name:'index4',
          component:index4,
        }

      ]

    }
   
  ]
})
