import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeNegociosView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import Dashboard from '@/views/InicialView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
// importe outras páginas internas conforme necessário

const routes = [

  {
    path: '/',
    redirect: '/opcoes'
  },
  {
    path: '/opcoes',
    name: 'opcoes',
    component: () => import('@/views/OpcoesView.vue')
  },
  {
    path: '/home-negocio',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView
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
  {
    path: '/criar-perfil',
    name: 'criarPerfil',
    component: () => import('@/views/CriarPerfilView.vue')
  },
  // Rotas autenticadas com layout
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'home',
        name: 'inicial',
        component: Dashboard
      },
      {
        path: 'perfil',
        name: 'perfil',
        component: () => import('@/views/PerfilView.vue')
      },
      {
        path: 'perfil/:id',
        name: 'perfilDetalhado',
        component: () => import('@/views/PerfilDetalheView.vue')
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
