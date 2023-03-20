import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/view/main-page'
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('@/layouts/index.vue'),
    children : [
      {
        path: 'main-page',
        name: 'main-page',
        component: () => import('@/views/mainPage.vue')
      },
      {
        path: 'service-page',
        name: 'service-page',
        component: () => import('@/views/servicePage.vue')
      },
      {
        path: 'emitter-guide',
        name: 'emitter-guide',
        component: () => import('@/views/emitterGuide.vue')
      },
      {
        path: 'collector-guide',
        name: 'collector-guide',
        component: () => import('@/views/collectorGuide.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
