<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-4xl font-bold mb-8 text-black">Categorias de Serviços</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="categoria in categorias" :key="categoria.id"
        class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition cursor-pointer">

        <component :is="categoria.icon" class="w-12 h-12 text-black mb-4" />

        <h2 class="text-xl font-semibold text-center">{{ categoria.nome }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Laptop,         // tecnologia
  Shirt,         // moda
  Smile,           // beleza
  Heart,          // saúde
  ForkKnife,      // alimentação
} from 'lucide-vue-next'

const categorias = [
  { id: 1, nome: 'Tecnologia', icon: Laptop },
  { id: 2, nome: 'Moda', icon: Shirt },
  { id: 3, nome: 'Beleza', icon: Smile },
  { id: 4, nome: 'Saúde', icon: Heart },
  { id: 5, nome: 'Alimentação', icon: ForkKnife },
]
</script>
