<template>
  <section id="pacotes" class="py-20 px-6 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto text-center">
      <h3 class="text-indigo-400 text-sm uppercase tracking-widest mb-2">Nossos Pacotes</h3>
      <h2 class="text-gray-900 dark:text-white text-3xl sm:text-4xl font-bold mb-4">
        Planos que se adaptam ao seu negócio
      </h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
        Escolha entre nossos planos estratégicos e potencialize sua presença com a Ararion.
      </p>

      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        <!-- Pacote Básico -->
        <div
          class="bg-gray-700 dark:bg-gray-800 rounded-xl border border-gray-700 dark:border-gray-500 p-8 text-white hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-2">Plano Básico</h3>
          <p class="text-indigo-400 text-4xl font-bold mb-1">R$25,00</p>
          <p class="text-gray-400 dark:text-gray-300 mb-6">Para empresas que querem começar</p>
          <ul class="space-y-3 text-sm mb-8">
            <li class="flex items-center gap-1">
              <IconsComp name="Check" /> Nome em destaque da empresa
            </li>
            <li class="flex items-center gap-1">
              <IconsComp name="Check" /> Endereço, contato e serviço
            </li>
            <li class="flex items-center gap-1">
              <IconsComp name="Check" /> Divulgação na área principal
            </li>
          </ul>
          <button @click="goToCheckout(planos.basico)"
            class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
            Escolher plano
          </button>
        </div>

        <!-- Pacote Plus (Mais Popular) -->
        <div
          class="relative bg-gray-700 dark:bg-gray-800 border-2 border-indigo-500 dark:border-indigo-400 p-8 text-white shadow-xl transform hover:-translate-y-2 transition">
          <div
            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 dark:bg-indigo-500 px-4 py-1 text-sm font-semibold rounded-full">
            Mais Popular
          </div>
          <h3 class="text-xl font-semibold mb-2">Plano Plus</h3>
          <p class="text-indigo-400 text-4xl font-bold mb-1">R$50,00</p>
          <p class="text-gray-400 dark:text-gray-300 mb-6">Soluções completas para empresas</p>
          <ul class="space-y-3 text-sm mb-8">
            <li class="flex items-center gap-1">
              <IconsComp name="Check" /> Nome em destaque da empresa
            </li>
            <li class="flex items-center gap-1">
              <IconsComp name="Check" /> Endereço, contato e serviço
            </li>
            <li class="flex items-center gap-1">
              <IconsComp name="Check" /> Divulgação na área principal
            </li>
            <li class="flex items-center gap-1">
              <IconsComp name="Check" /> Catálogo personalizado
            </li>
            <li class="flex items-center gap-1">
              <IconsComp name="Check" /> Destaque na home
            </li>
          </ul>
          <button @click="goToCheckout(planos.plus)"
            class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
            Escolher plano
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import IconsComp from './IconsComp.vue'

const router = useRouter()

const planos = {
  basico: {
    nome: 'Plano Básico',
    preco: 25,
    descricao: 'Para empresas que querem começar',
    recursos: [
      'imagem',          // imagem principal (logo/foto)
      'titulo',          // título do perfil
      'endereco',
      'contato',
      'descricao',       // se quiser deixar a descrição disponível
      // 'instagram' pode ser opcional aqui
    ]
  },
  plus: {
    nome: 'Plano Plus',
    preco: 50,
    descricao: 'Soluções completas para empresas',
    recursos: [
      'imagem',
      'titulo',
      'descricao',
      'instagram',
      'endereco',
      'contato',
      'catalogo',        // catálogo de imagens (multi)
    ]
  }
}


// No botão de escolher plano:
const goToCheckout = (plano) => {
  router.push({
    path: '/checkout',
    query: {
      nome: plano.nome,
      descricao: plano.descricao,
      preco: plano.preco,
      recursos: JSON.stringify(plano.recursos)
    }
  })
}

</script>
