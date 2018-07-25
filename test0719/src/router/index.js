import Vue from 'vue'
import Router from 'vue-router'

import Home from'../pages/home'
import Broadcast from '../pages/broadcast'
import Group from'../pages/group'
import Guangbo from'../pages/guangbo'
import Mine from'../pages/mine'

import City from'../pages/audio/city'
import Film from'../pages/audio/film'
import Music from'../pages/audio/music'
import Read from'../pages/audio/read'
import Tv from'../pages/audio/tv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/broadcast',
      name: 'home',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/guangbo',
      name: 'guangbo',
      component: Guangbo,
      children:[
        {path:'city',component:City},
        {path:'film',component:Film},
        {path:'music',component:Music},
        {path:'read',component:Read},
        {path:'tv',component:Tv}

      ]
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
