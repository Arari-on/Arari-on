<template>
  <div :class="[
    collapsed ? '-translate-x-full' : 'translate-x-0',
    'fixed z-30 bg-white dark:bg-gray-900 text-gray-700 dark:text-white w-64 h-full transform transition-transform duration-300 ease-in-out flex flex-col border-r border-gray-200 dark:border-gray-700'
  ]">
    <SubHeaderComp :collapsed="collapsed" @toggle="toggleSidebar" />

    <!-- Logo e botão fechar -->
    <div class="flex items-center justify-between md:justify-center p-4">
      <img src="../assets/images/vertente.png" alt="">
    </div>

    <!-- Navegação -->
    <nav class="flex-1 mt-6 px-4 space-y-1">
      <RouterLink to="/home"
        class="flex items-center gap-3 px-4 py-2 rounded transition hover:bg-neutral-200 dark:hover:bg-gray-800"
        :class="{ 'bg-gray-200 dark:bg-gray-800': $route.name === 'home' }">
        <LucideHome class="text-xl" /> Home
      </RouterLink>

      <RouterLink to="/perfil"
        class="flex items-center gap-3 px-4 py-2 rounded transition hover:bg-neutral-200 dark:hover:bg-gray-800"
        :class="{ 'bg-gray-200 dark:bg-gray-800': $route.name === 'perfil' }">
        <LucideUser class="text-xl" /> Perfil
      </RouterLink>

      <RouterLink to="/categorias"
        class="flex items-center gap-3 px-4 py-2 rounded transition hover:bg-neutral-200 dark:hover:bg-gray-800"
        :class="{ 'bg-gray-200 dark:bg-gray-800': $route.name === 'categorias' }">
        <LucideFolder class="text-xl" /> Categorias
      </RouterLink>

      <RouterLink to="/favoritos"
        class="flex items-center gap-3 px-4 py-2 rounded transition hover:bg-neutral-200 dark:hover:bg-gray-800"
        :class="{ 'bg-gray-200 dark:bg-gray-800': $route.name === 'favoritos' }">
        <LucideStar class="text-xl" /> Favoritos
      </RouterLink>

      <RouterLink to="/registro-de-negocio"
        class="flex items-center gap-3 px-4 py-2 rounded transition hover:bg-neutral-200 dark:hover:bg-gray-800"
        :class="{ 'bg-gray-200 dark:bg-gray-800': $route.name === 'registro-de-negocio' }">
        <LucideBuilding class="text-xl" /> Registre seu negócio
      </RouterLink>
    </nav>

    <!-- Rodapé - Logout -->
    <div class="p-4">
      <form @submit.prevent="logout">
        <button class="flex items-center gap-3 px-4 py-2 w-full rounded hover:bg-red-600/90 text-white transition">
          <LucideLogOut class="text-xl" /> Logout
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {
  LucideHome,
  LucideUser,
  LucideFolder,
  LucideStar,
  LucideBuilding,
  LucideLogOut
} from 'lucide-vue-next'

import { useRouter } from 'vue-router'

defineProps({
  collapsed: Boolean,
})

const router = useRouter()

function logout() {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>
