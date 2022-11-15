import { createRouter, createWebHistory } from 'vue-router'
import TabBar from '@/components/TabBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:TabBar,
      children:[
        {
          path:"/index",
          name:"Index",
          component: () => import('@/views/index/index.vue')
        },
        {
          path:"/moment",
          name:"Moment",
          component: () => import('@/views/moment/index.vue')
        },
        {
          path:"/my",
          name:"My",
          component: () => import('@/views/my/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    }
  ]
})

export default router
