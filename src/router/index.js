import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/nodes',
    name: 'nodes',
    component: () => import('../views/Nodes.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/monetary',
    name: 'monetary',
    component: () => import('../views/Monetary.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
