<template>
  <section class="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-lg mt-10">
    <h1 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
      Criar Perfil - {{ plano.nome }}
    </h1>

    <form @submit.prevent="salvarPerfil" class="space-y-6">
      <div v-if="recursos.includes('imagem')" class="flex flex-col">
        <label class="mb-2 font-semibold text-gray-700 dark:text-gray-300">Imagem Principal</label>
        <input @change="form.imagem = $event.target.files[0]" type="file" accept="image/*"
          class="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
      </div>

      <div v-if="recursos.includes('titulo')" class="flex flex-col">
        <label class="mb-2 font-semibold text-gray-700 dark:text-gray-300">Título do Perfil</label>
        <input v-model="form.titulo" required type="text"
          class="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Digite o título (ex: Psicólogo Lucas)" />
      </div>

      <div v-if="recursos.includes('descricao')" class="flex flex-col">
        <label class="mb-2 font-semibold text-gray-700 dark:text-gray-300">Descrição</label>
        <textarea v-model="form.descricao" rows="3"
          class="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Descrição opcional do perfil"></textarea>
      </div>

      <div v-if="recursos.includes('instagram')" class="flex flex-col">
        <label class="mb-2 font-semibold text-gray-700 dark:text-gray-300">Instagram</label>
        <input v-model="form.instagram" type="text"
          class="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Nome de usuário do Instagram" />
      </div>

      <div v-if="recursos.includes('endereco')" class="flex flex-col">
        <label class="mb-2 font-semibold text-gray-700 dark:text-gray-300">Endereço</label>
        <input v-model="form.endereco" type="text"
          class="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Digite o endereço" />
      </div>

      <div v-if="recursos.includes('contato')" class="flex flex-col">
        <label class="mb-2 font-semibold text-gray-700 dark:text-gray-300">Contato</label>
        <input v-model="form.contato" type="text"
          class="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Telefone, WhatsApp, etc." />
      </div>

      <div v-if="recursos.includes('catalogo')" class="flex flex-col">
        <label class="mb-2 font-semibold text-gray-700 dark:text-gray-300">Catálogo de Imagens</label>
        <input @change="form.catalogo = $event.target.files" type="file" multiple accept="image/*"
          class="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
      </div>

      <button type="submit"
        class="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition">
        Salvar Perfil
      </button>
    </form>
  </section>
</template>

<script setup>
import router from '@/router'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()

const plano = ref({
  nome: route.query.nome || 'Plano Padrão'
})

const recursos = ref([])
if (route.query.recursos) {
  recursos.value = JSON.parse(route.query.recursos)
}

const form = ref({
  imagem: null,
  titulo: '',
  descricao: '',
  instagram: '',
  endereco: '',
  contato: '',
  catalogo: null,
})

async function salvarPerfil() {
  const formData = new FormData()

  if (form.value.imagem) {
    formData.append('imagem', form.value.imagem)
  }

  formData.append('titulo', form.value.titulo)
  formData.append('descricao', form.value.descricao)
  formData.append('instagram', form.value.instagram)
  formData.append('endereco', form.value.endereco)
  formData.append('contato', form.value.contato)

  if (form.value.catalogo) {
    for (let i = 0; i < form.value.catalogo.length; i++) {
      formData.append('catalogoImagens', form.value.catalogo[i])
    }
  }

  try {
    await axios.post('http://localhost:3000/perfil', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    alert('Perfil salvo com sucesso! 🎉')
    router.push('/home')
  } catch (err) {
    console.error(err)
    alert('Erro ao salvar perfil: ' + (err.response?.data?.message || err.message))
  }
}
</script>
