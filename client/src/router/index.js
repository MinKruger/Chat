import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/Chat.vue'),
  },
  {
    path: '/anonymous',
    name: 'anonymous',
    component: () => import('../views/ChatA.vue'),
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/UserMessage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
