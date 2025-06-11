<template>
  <div class="flex h-screen bg-gray-100 overflow-hidden">
    <!-- Sidebar -->
    <SidebarComp :collapsed="collapsed" @toggle="toggleSidebar" />

    <!-- Área principal -->
    <div :class="[
      'flex flex-col flex-1 transition-all overflow-x-hidden',  // overflow-x-hidden adicionado aqui
      collapsed ? 'ml-0' : 'ml-64'
    ]">
      <!-- Header -->
      <SubHeaderComp :collapsed="collapsed" @toggle="toggleSidebar" />

      <!-- Conteúdo -->
      <main class="flex-1 md:p-6 p-4 overflow-x-hidden dark:bg-gray-900">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarComp from '@/components/SidebarComp.vue'
import SubHeaderComp from '@/components/SubHeaderComp.vue'

const collapsed = ref(false)

const toggleSidebar = () => {
  collapsed.value = !collapsed.value
}
</script>

<style scoped>
main {
  min-height: calc(100vh - 4rem);
}
</style>
