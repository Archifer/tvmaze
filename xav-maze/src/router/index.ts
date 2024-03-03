import NotFoundViewVue from '@/views/NotFoundView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/series/:id',
      name: 'details',
      component: () => import('../views/SeriesDetailsView.vue')
    },
    {
      path: '/:catchAll(.*)', // Matches any route that hasn't been defined
      name: 'NotFound',
      component: NotFoundViewVue
    }
  ]
})

export default router
