import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClienteView.vue'),
      children: [
        { path: '', component: () => import('../components/cliente/ClienteList.vue') },
        { path: 'crear', component: () => import('../components/cliente/ClienteCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/cliente/ClienteEdit.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
