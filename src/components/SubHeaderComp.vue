<template>
  <header class="relative h-16 bg-white shadow flex items-center px-4">
    <!-- Botão menu -->
    <button @click="$emit('toggle')" class="p-2 rounded hover:bg-neutral-200 transition">
      <LucideMenu class="h-6 w-6" />
    </button>

    <!-- Centro -->
    <nav class="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
      <input v-if="isSearchOpen" type="text" placeholder="Pesquisar" class="px-4 py-2 border rounded" />
      <button @click="isSearchOpen = !isSearchOpen" class="p-2 rounded hover:bg-neutral-200 transition">
        <LucideSearch class="h-6 w-6" />
      </button>
      <RouterLink to="/home" class="p-2 rounded hover:bg-neutral-200 transition">
        <LucideHome class="h-6 w-6" />
      </RouterLink>
      <RouterLink to="/perfil" class="p-2 rounded hover:bg-neutral-200 transition">
        <LucideUser class="h-6 w-6" />
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { LucideMenu, LucideSearch, LucideHome, LucideUser } from 'lucide-vue-next'

const isSearchOpen = ref(false)
</script>
