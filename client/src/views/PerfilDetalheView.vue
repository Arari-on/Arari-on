<template>

  <div class="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-5 font-sans text-gray-800">
    <button @click="$router.back()" class="text-gray-500 hover:text-gray-800 transition flex items-center ">
      <LucideChevronLeft :size="28" />
      <p class="text-md">Voltar</p>
    </button>
    <!-- Header do perfil com avatar circular e ícone de voltar -->

    <div class="flex items-center space-x-4">
      <img :src="perfil.imagem" alt="Avatar" class="w-24 h-24 rounded-full object-cover border border-gray-500" />
      <div>
        <h2 class="text-2xl font-semibold leading-tight">{{ perfil.titulo }}</h2>
        <p class="text-md text-gray-500">{{ perfil.instagram }}</p>
      </div>
    </div>

    <!-- Descrição -->
    <p v-if="perfil.descricao" class="text-md leading-relaxed text-gray-700">
      {{ perfil.descricao }}
    </p>

    <!-- Contato e endereço - estilo sutil -->
    <div class="text-sm text-gray-600 space-y-1">
      <p><strong>Contato:</strong> {{ perfil.contato }}</p>
      <p><strong>Endereço:</strong> {{ perfil.endereco }}</p>
    </div>

    <!-- Galeria estilo feed Instagram -->
    <div v-if="perfil.catalogo && perfil.catalogo.length" class="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
      <img v-for="(foto, index) in perfil.catalogo" :key="index" :src="foto" alt="Foto do catálogo"
        class="w-full h-full object-cover cursor-pointer hover:opacity-90 transition" @click="abrirModal(foto)" />
    </div>

    <!-- Modal de visualização -->
    <div v-if="modalAberto" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      @click="modalAberto = false">
      <img :src="imagemSelecionada" alt="Foto ampliada" class="max-w-full max-h-full rounded-lg" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { LucideChevronLeft } from 'lucide-vue-next'

const route = useRoute()
const perfil = ref({})
const modalAberto = ref(false)
const imagemSelecionada = ref(null)

function abrirModal(foto) {
  imagemSelecionada.value = foto
  modalAberto.value = true
}

const perfisMock = [
  {
    id: 0,
    titulo: 'Psicólogo Lucas',
    descricao: '',
    imagem: new URL('../assets/perfils/perfil1/logo.jpeg', import.meta.url).href,
    instagram: 'psicólogoLucas',
    contato: '88 3324-5682',
    endereco: 'Rua José de Alencar,304, Belo Horizonte',
    catalogo: [
      new URL('../assets/perfils/perfil1/1.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil1/2.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil1/3.jpeg', import.meta.url).href,
    ],
  },
  {
    id: 1,
    titulo: 'Liana Manicure',
    descricao: '',
    imagem: new URL('../assets/perfils/perfil3/logo.png', import.meta.url).href,
    instagram: 'Lianasantos.manicure',
    contato: '88 6653-4817',
    endereco: 'Rua castelo branco, 290, Fortaleza-CE',
    catalogo: [
      new URL('../assets/perfils/perfil3/1.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil3/2.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil3/3.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil3/4.jpeg', import.meta.url).href,
    ],
  },
  {
    id: 2,
    titulo: 'Márcia Imóveis',
    descricao: '',
    imagem: new URL('../assets/perfils/perfil4/logo.jpeg', import.meta.url).href,
    instagram: 'Márcia.Imóveis',
    contato: '88 99244-5187',
    endereco: 'Avenida Beira-mar, Fortaleza-CE',
    catalogo: [
      new URL('../assets/perfils/perfil4/1.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil4/2.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil4/3.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil4/4.jpeg', import.meta.url).href,
    ],
  },
  {
    id: 3,
    titulo: 'Samara Nail Designer',
    descricao: 'Mãe, esposa e empreendedora do próprio negócio com unhas.',
    imagem: new URL('../assets/perfils/perfil5/logo.jpeg', import.meta.url).href,
    instagram: '@samaranaildesigner',
    contato: '88 9337-9738',
    endereco: 'Rua Antônio Nunes de Alencar 785',
    catalogo: [
      new URL('../assets/perfils/perfil5/1.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil5/2.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil5/3.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil5/4.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil5/5.jpeg', import.meta.url).href,
    ],
  },
  {
    id: 4,
    titulo: 'Semijóias LA',
    descricao: 'Jovem empreendedora com seu próprio negócio em semijóias.',
    imagem: new URL('../assets/perfils/perfil6/logo.jpeg', import.meta.url).href,
    instagram: '@semijóiasLA',
    contato: '88 99419-1653',
    endereco: 'Rua Padre Cícero 542',
    catalogo: [
      new URL('../assets/perfils/perfil6/1.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil6/2.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil6/3.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil6/4.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil6/5.jpeg', import.meta.url).href,
    ],
  },
  {
    id: 5,
    titulo: 'Mercadão Wilson',
    descricao: '',
    imagem: new URL('../assets/perfils/perfil7/logo.jpeg', import.meta.url).href,
    instagram: 'Mercadão_Wilson',
    contato: '88 99273-6685',
    endereco: 'Avenida Osório de Paiva, Fortaleza-CE',
    catalogo: [
      new URL('../assets/perfils/perfil7/1.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil7/2.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil7/3.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil7/4.jpeg', import.meta.url).href,
    ],
  },
  {
    id: 6,
    titulo: 'Flower Salão',
    descricao: '',
    imagem: new URL('../assets/perfils/perfil8/logo.jpeg', import.meta.url).href,
    instagram: 'Flower.Salão',
    contato: '88 7243-5189',
    endereco: 'Avenida iguanambi - Fortaleza-CE',
    catalogo: [
      new URL('../assets/perfils/perfil8/1.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil8/2.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil8/3.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil8/4.jpeg', import.meta.url).href,
    ],
  },
  {
    id: 7,
    titulo: 'Fit Arena',
    descricao: 'Academia com foco em resultados.',
    imagem: new URL('../assets/perfils/perfil9/logo.jpeg', import.meta.url).href,
    instagram: 'fit_arena',
    contato: '(88) 85897-6578',
    endereco: 'Rua Sebastião Cordeiro - Araripe-CE',
    catalogo: [
      new URL('../assets/perfils/perfil9/1.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil9/2.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil9/3.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil9/4.jpeg', import.meta.url).href,
      new URL('../assets/perfils/perfil9/5.jpeg', import.meta.url).href,
    ],
  }
]

perfil.value = perfisMock.find(p => p.id === Number(route.params.id))
</script>
