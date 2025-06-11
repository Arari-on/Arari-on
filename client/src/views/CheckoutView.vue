<template>
  <section
    class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6">
    <div class="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-2xl w-full p-8 space-y-8">

      <div class="space-y-2">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Finalizar Assinatura</h1>
        <p class="text-gray-600 dark:text-gray-400 text-sm">Revise seu plano e preencha seus dados para concluir a
          assinatura.</p>
      </div>

      <!-- Resumo do Plano -->
      <div class="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 bg-gray-50 dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Plano Selecionado</h2>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{{ plano.nome }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ plano.descricao }}</p>
          </div>
          <div class="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">R$ {{ plano.preco }},00</div>
        </div>
      </div>

      <!-- Formulário -->
      <form @submit.prevent="finalizarPedido" class="space-y-5">
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
          <input type="text" v-model="form.nome" placeholder="Seu nome completo" required
            class="text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full transition" />
        </div>

        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input type="email" v-model="form.email" placeholder="seuemail@exemplo.com" required
            class="text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full transition" />
        </div>

        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">CPF</label>
          <input type="text" v-model="form.cpf" placeholder="000.000.000-00" required
            class="text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full transition" />
        </div>

        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Telefone</label>
          <input type="tel" v-model="form.telefone" placeholder="(xx) xxxxx-xxxx" required
            class="text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full transition" />
        </div>

        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">CEP</label>
          <input type="text" v-model="form.cep" placeholder="Digite seu CEP" required
            class="text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full transition" />
        </div>

        <button type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition">
          Finalizar Pedido
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const recursos = ref([])
if (route.query.recursos) {
  recursos.value = JSON.parse(route.query.recursos)
}

const plano = ref({
  nome: route.query.nome || 'Plano Padrão',
  descricao: route.query.descricao || 'Descrição padrão',
  preco: Number(route.query.preco) || 0,
  recursos: recursos.value
})

const form = ref({
  nome: '',
  email: '',
  cpf: '',
  telefone: '',
  cep: ''
})

function finalizarPedido() {
  alert('Pedido finalizado com sucesso! 🎉')

  router.push({
    path: '/criar-perfil',
    query: {
      nome: plano.value.nome,
      recursos: JSON.stringify(plano.value.recursos)
    }
  })
}
</script>

