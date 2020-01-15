import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: ()=>import('@/views/About.vue'),
  },
  {
    path: '/featured',
    name: 'featured',
    redirect: '/',
  },
  {
    path: '/catalog',
    name: 'catalog',
    redirect: '/',
  },
  {
    path: '/articles',
    name: 'articles',
    redirect: '/',
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
