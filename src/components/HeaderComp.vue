<template>
  <header class="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <h1 class="text-2xl font-bold text-blue-600">Ararion</h1>

      <!-- Navegação desktop -->
      <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
        <a v-for="link in links" :key="link.href" :href="link.href"
          class="relative group transition-colors hover:text-blue-600">
          {{ link.label }}
          <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
        </a>
        <a href="#pacotes"
          class="scroll-smooth ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition shadow">
          Começar
        </a>

        <!-- Botão modo escuro -->
        <button @click="toggleDarkMode" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          title="Alternar tema">
          <!-- Ícones de sol e lua diretamente -->
          <LucideSun v-if="isDark" class="w-5 h-5 text-gray-700 dark:text-gray-200 transition" />
          <LucideMoon v-else class="w-5 h-5 text-gray-700 dark:text-gray-200 transition" />
        </button>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" @click="open = !open">
        <LucideMenu class="w-6 h-6 text-gray-800 dark:text-gray-100" />
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition name="fade">
      <div v-if="open" class="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-4 pb-4">
        <nav class="flex flex-col space-y-2 text-sm font-medium pt-2">
          <a v-for="link in links" :key="link.href" :href="link.href" class="hover:text-blue-600 transition">
            {{ link.label }}
          </a>
          <a href="#pacotes"
            class="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition">
            Começar
          </a>

          <!-- Botão para alternar tema (no mobile) -->
          <button @click="toggleDarkMode" class="flex items-center space-x-2 mt-2">
            <LucideSun v-if="isDark" class="w-5 h-5 text-gray-700 dark:text-gray-200 transition" />
            <LucideMoon v-else class="w-5 h-5 text-gray-700 dark:text-gray-200 transition" />
            <span class="text-sm text-gray-700 dark:text-gray-200">
              {{ isDark ? 'Modo Claro' : 'Modo Escuro' }}
            </span>
          </button>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { LucideMenu, LucideSun, LucideMoon } from 'lucide-vue-next'
import { useDark, useToggle } from '@vueuse/core'

// Gerenciamento do modo escuro
const isDark = useDark()
const toggleDark = useToggle(isDark)
const toggleDarkMode = () => toggleDark()

const open = ref(false)

// Links de navegação
const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Pacotes', href: '#pacotes' },
  { label: 'Contato', href: '#contato' },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
