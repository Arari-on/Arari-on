<template>
  <div class="p-4">
    <h1 class="text-4xl font-bold mb-8 text-black dark:text-white">Favoritos</h1>

    <div v-if="favoritos.length === 0" class="text-gray-400 flex items-center justify-center mt-10 gap-2">
      <LucideAlertCircle class="w-6 h-6" />
      <span>
        Você não tem favoritos ainda.
      </span>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="perfil in favoritos" :key="perfil.id"
        class="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
        <img :src="perfil.imagem" alt="Foto do perfil" class="w-16 h-16 rounded-full object-cover" />
        <div>
          <h4 class="font-semibold text-lg">{{ perfil.titulo }}</h4>
          <p class="text-gray-600">{{ perfil.descricao }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { LucideAlertCircle } from 'lucide-vue-next'

const favoritos = ref([])

const carregarFavoritos = () => {
  try {
    const localFavoritos = localStorage.getItem('favoritosMock')
    favoritos.value = JSON.parse(localFavoritos) || []
  } catch (e) {
    favoritos.value = []
    console.error('Erro ao carregar favoritos do localStorage:', e)
  }
}

onMounted(() => {
  carregarFavoritos()
})
</script>
