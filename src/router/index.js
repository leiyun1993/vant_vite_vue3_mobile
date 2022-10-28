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
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
