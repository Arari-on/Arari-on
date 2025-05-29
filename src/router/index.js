import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeNegociosView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import Dashboard from '@/views/InicialView.vue'
// importe outras páginas internas conforme necessário

const routes = [

  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home-negocio',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/RegisterView.vue')
  },
  // Rotas autenticadas com layout
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Dashboard
      },
      {
        path: 'perfil',
        name: 'perfil',
        component: () => import('@/views/PerfilView.vue')
      },
      {
        path: 'categorias',
        name: 'categorias',
        component: () => import('@/views/CategoriasView.vue')
      },
      {
        path: 'favoritos',
        name: 'favoritos',
        component: () => import('@/views/FavoritosView.vue')
      },
      {
        path: 'registro-de-negocio',
        name: 'registro-de-negocio',
        component: () => import('@/views/RegistroBusinessView.vue')
      }


    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
