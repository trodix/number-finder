import Vue from 'vue'
import VueRouter from 'vue-router'

import Start from '../views/Start'
import Main from '../views/Main'
import End from '../views/End'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/game',
    name: 'game',
    component: Main
  },
  {
    path: '/end',
    name: 'end',
    component: End
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
