<template>
  <div :class="[
    collapsed ? '-translate-x-full' : 'translate-x-0',
    'fixed z-30 bg-white text-gray-700 w-64 h-full transform transition-transform duration-300 ease-in-out flex flex-col'
  ]">
    <!-- Logo e botão fechar -->
    <div class="flex items-center justify-between md:justify-center p-4 border-b border-neutral-300">
      <h1 class="text-2xl font-bold text-gray-800">Arari-on</h1>

    </div>

    <!-- Navegação -->
    <nav class="flex-1 mt-6 px-4 space-y-1">
      <RouterLink to="/home" class="flex items-center gap-3 px-4 py-2 rounded hover:bg-neutral-200 transition"
        :class="{ 'bg-neutral-200': $route.name === 'home', 'active': $route.name === 'home' }">
        <LucideHome class="text-xl" /> Home
      </RouterLink>

      <RouterLink to="/perfil" class="flex items-center gap-3 px-4 py-2 rounded hover:bg-neutral-200 transition"
        :class="{ 'active': $route.name === 'agendamentos' }">
        <LucideUser class="text-xl" /> Perfil
      </RouterLink>

      <RouterLink to="/categorias" class="flex items-center gap-3 px-4 py-2 rounded hover:bg-neutral-200 transition"
        :class="{ 'active': $route.name === 'categorias' }">
        <LucideFolder class="text-xl" /> Categorias
      </RouterLink>

      <RouterLink to="/favoritos" class="flex items-center gap-3 px-4 py-2 rounded hover:bg-neutral-200 transition"
        :class="{ 'active': $route.name === 'favoritos' }">
        <LucideStar class="text-xl" /> Favoritos
      </RouterLink>

      <RouterLink to="/registro-de-negocio"
        class="flex items-center gap-3 px-4 py-2 rounded hover:bg-neutral-200 transition"
        :class="{ 'active': $route.name === 'registro-de-negocio' }">
        <LucideBuilding class="text-xl" /> Registre seu negócio
      </RouterLink>
    </nav>

    <!-- Rodapé - Sair -->
    <div class="p-4">
      <button class="flex items-center gap-3 px-4 py-2 w-full rounded hover:bg-red-600 transition">
        <LucideLogOut class="text-xl" /> Sair
      </button>
    </div>
  </div>
</template>

<script setup>
import { LucideHome, LucideUser, LucideFolder, LucideStar, LucideBuilding, LucideLogOut } from 'lucide-vue-next'

defineProps({
  collapsed: Boolean,
})
</script>


