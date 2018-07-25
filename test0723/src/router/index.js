import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list'
import Home from '@/pages/home'
import Xiangqing from '../components/xiangqing'
import Detail from '../pages/detail'
import Compiled from '../components/compiled'
import Compile from '../pages/compile'
import Newcompile from '../components/newcompile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/xiangqing',
      name:'Xiangqing',
      component:Xiangqing
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail
    },
    {
      path:'/compile',
      name:'compile',
      component:Compile
    },
    {
      path:'/compiled',
      name:'compiled',
      component:Compiled
    },
    {
      path:'/newcompile',
      name:'newcompile',
      component:Newcompile
    }
  ]
})
