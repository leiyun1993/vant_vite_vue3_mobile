import { createRouter, createWebHistory } from 'vue-router'
import TabBar from '@/components/TabBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TabBar,
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "Index",
          component: () => import('@/views/index/index.vue'),
          meta: {
            title: "家校互通"
          }
        },
        {
          path: "/moment",
          name: "Moment",
          component: () => import('@/views/moment/index.vue'),
          meta: {
            title: "动态"
          }
        },
        {
          path: "/my",
          name: "My",
          component: () => import('@/views/my/index.vue'),
          meta: {
            title: "我的"
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: "登录"
      }
    },
    {
      path: '/rolelist',
      name: 'RoleList',
      component: () => import('@/views/login/rolelist.vue'),
      meta: {
        title: "身份切换"
      }
    }
  ]
})

export default router
