<template>
  <header
    class="relative h-16 bg-white dark:bg-gray-900 flex items-center px-4 text-black dark:text-white border-b dark:border-gray-700">

    <!-- Botão menu -->
    <button @click="$emit('toggle')" aria-label="Abrir menu"
      class="p-2 rounded hover:bg-neutral-200 dark:hover:bg-gray-700 transition z-20">
      <LucideMenu class="h-6 w-6" />
    </button>

    <!-- Wrapper centralizador -->
    <div class="absolute inset-0 flex justify-center items-center pointer-events-none">
      <!-- Nav central (visível apenas se sidebar estiver fechada no mobile) -->
      <nav v-show="!isMobileSidebarOpen" class="flex items-center overflow-x-auto scrollbar-hide pointer-events-auto
               max-w-full md:justify-center" role="navigation">
        <!-- Pesquisa -->
        <template v-if="isSearchOpen">
          <div class="relative flex-shrink-0">
            <input type="text" placeholder="Pesquisar"
              class="px-4 py-2 border rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-40 md:w-56"
              aria-label="Campo de pesquisa" v-model="searchText" />
            <button @click="isSearchOpen = false; searchText = ''" aria-label="Fechar pesquisa"
              class="p-2 rounded hover:bg-neutral-200 dark:hover:bg-gray-700 transition absolute right-0 top-1/2 -translate-y-1/2">
              <LucideX class="h-6 w-6" />
            </button>
          </div>
        </template>

        <!-- Ícones -->
        <template v-else>
          <button @click="isSearchOpen = true" aria-label="Abrir pesquisa"
            class="p-2 rounded hover:bg-neutral-200 dark:hover:bg-gray-700 transition flex-shrink-0">
            <LucideSearch class="h-6 w-6" />
          </button>
          <RouterLink to="/home"
            class="p-2 rounded hover:bg-neutral-200 dark:hover:bg-gray-700 transition flex-shrink-0"
            aria-label="Página inicial">
            <LucideHome class="h-6 w-6" />
          </RouterLink>
          <RouterLink to="/perfil"
            class="p-2 rounded hover:bg-neutral-200 dark:hover:bg-gray-700 transition flex-shrink-0"
            aria-label="Perfil do usuário">
            <LucideUser class="h-6 w-6" />
          </RouterLink>
          <button @click="toggleDark()" aria-label="Alternar tema"
            class="p-2 rounded hover:bg-neutral-200 dark:hover:bg-gray-700 transition flex-shrink-0">
            <LucideMoon v-if="isDark" class="h-6 w-6" />
            <LucideSun v-else class="h-6 w-6" />
          </button>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import {
  LucideMenu,
  LucideSearch,
  LucideHome,
  LucideUser,
  LucideMoon,
  LucideSun,
  LucideX,
} from "lucide-vue-next";

const props = defineProps({
  collapsed: Boolean,
});

const isDark = useDark();
const toggleDark = useToggle(isDark);

const isSearchOpen = ref(false);
const searchText = ref("");

// Detecta mobile + sidebar aberta
const isMobile = ref(window.innerWidth < 768);
const isMobileSidebarOpen = computed(() => isMobile.value && !props.collapsed);

function updateMobile() {
  isMobile.value = window.innerWidth < 768;
}
onMounted(() => window.addEventListener("resize", updateMobile));
onBeforeUnmount(() => window.removeEventListener("resize", updateMobile));
</script>
