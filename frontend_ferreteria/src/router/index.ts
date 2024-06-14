import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores'
import { getTokenFromLocalStorage } from '@/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import('../views/CategoriaView.vue'),
      children: [{ path: '', component: () => import('../components/categoria/CategoriaList.vue') }]
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('@/views/ProductoView.vue'),
      children: [{ path: '', component: () => import('../components/producto/ProductoList.vue') }]
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: () => import('../views/VentaView.vue'),
      children: [{ path: '', component: () => import('../components/venta/VentaForm.vue') }]
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
      path: '/proveedores',
      name: 'proveedores',
      component: () => import('../views/ProveedorView.vue'),
      children: [
        { path: '', component: () => import('../components/proveedor/ProveedorList.vue') },
        { path: 'crear', component: () => import('../components/proveedor/ProveedorCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/proveedor/ProveedorEdit.vue')
        }
      ]
    },
    {
      path: '/empleados',
      name: 'empleados',
      component: () => import('../views/EmpleadoView.vue'),
      children: [{ path: '', component: () => import('../components/empleado/EmpleadoList.vue') }]
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('@/views/UsuarioView.vue'),
      children: [{ path: '', component: () => import('../components/usuario/UsuarioList.vue') }]
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

router.beforeEach(async (to) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout()
    authStore.returnUrl = to.fullPath
    return '/login'
  }
})

export default router
