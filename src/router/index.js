import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mylove from "@/components/mylove"
import menus from "@/components/menus"

Vue.use(Router)

export default new Router({
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
      component:menus
    }
  ]
})
