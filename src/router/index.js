import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: import('../views/Start.vue')
  },
  {
    path: '/game/:pseudo/:token',
    name: 'game',
    component: import('../views/Main.vue')
  },
  {
    path: '/end/:pseudo/:token',
    name: 'end',
    component: () => import('../views/End.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
