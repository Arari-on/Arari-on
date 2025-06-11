<template>
  <div class="min-h-screen mx-auto dark:text-white transition-colors duration-300">
    <h1 class="text-4xl font-bold mb-8 text-black dark:text-white">Perfil</h1>

    <div class="flex items-center space-x-6 sm:flex-row flex-col sm:space-x-12 space-y-4 sm:space-y-0">
      <!-- Foto de perfil -->
      <div
        class="w-24 h-24 rounded-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center overflow-hidden sm:w-48 sm:h-48">
        <LucideUser class="w-12 h-12 text-gray-500 dark:text-gray-300 sm:w-20 sm:h-20" />
      </div>

      <!-- Dados principais -->
      <div>
        <h2 class="text-2xl font-bold sm:text-3xl">{{ user.nome }}</h2>
        <p class="text-gray-600 dark:text-gray-400">{{ user.email }}</p>
      </div>
    </div>

    <div class="mt-10">
      <h3 class="text-xl font-semibold mb-6 border-b border-gray-300 dark:border-zinc-700 pb-2">
        Informações do Perfil
      </h3>
      <div class="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
        <div class="flex flex-col sm:flex-row gap-2 p-4 bg-white dark:bg-zinc-800 rounded shadow-sm overflow-auto">
          <span class="font-medium text-black dark:text-white">Nome:</span>
          <span class="text-black dark:text-gray-300">{{ user.nome }}</span>
        </div>
        <div class="flex flex-col sm:flex-row gap-2 p-4 bg-white dark:bg-zinc-800 rounded shadow-sm overflow-auto">
          <span class="font-medium text-black dark:text-white">E-mail:</span>
          <span class="text-black dark:text-gray-300">{{ user.email }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { LucideUser } from 'lucide-vue-next'

const user = ref({
  nome: '',
  email: '',
})

onMounted(() => {
  const dados = localStorage.getItem('user')
  if (dados) {
    const userData = JSON.parse(dados)
    user.value = {
      nome: userData.nome,
      email: userData.email,
    }
  } else {
    // Se não tiver user salvo, pode redirecionar pro login ou mostrar erro
    alert('Usuário não autenticado')
    window.location.href = '/login'
  }
})
</script>
