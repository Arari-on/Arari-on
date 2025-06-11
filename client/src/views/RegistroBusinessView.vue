<template>
  <div class="min-h-screen p-8">
    <h1 class="text-4xl font-bold mb-8 dark:text-white">Registro de Empresa</h1>

    <form @submit.prevent="handleSubmit" class="space-y-8 w-full mx-auto dark:text-white">
      <!-- Linha 1 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium dark:text-white">Nome</label>
          <input v-model="nome" type="text" placeholder="Digite seu nome completo"
            class="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white outline-none" />
        </div>
        <div>
          <label class="block text-sm font-medium dark:text-white">Email</label>
          <input v-model="email" type="email" placeholder="seuemail@exemplo.com"
            class="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white outline-none" />
        </div>
      </div>

      <!-- Linha 2 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium dark:text-white">Celular</label>
          <input v-model="celular" type="tel" placeholder="(xx) xxxxx-xxxx"
            class="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white outline-none" />
        </div>
        <div>
          <label class="block text-sm font-medium dark:text-white">CPF</label>
          <input v-model="cpf" type="text" placeholder="000.000.000-00"
            class="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white outline-none" />
        </div>
      </div>

      <!-- Linha 3 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium dark:text-white">CEP</label>
          <input v-model="cep" type="text" placeholder="Digite seu CEP"
            class="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white outline-none" />
        </div>
        <div>
          <label class="block text-sm font-medium dark:text-white">Rua</label>
          <input v-model="rua" type="text" placeholder="Digite o nome da sua rua"
            class="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white outline-none" />
        </div>
      </div>

      <!-- Linha 4 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium dark:text-white">Categoria</label>
          <select v-model="categoria"
            class="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white outline-none">
            <option value="">Selecione...</option>
            <option>Tecnologia</option>
            <option>Moda</option>
            <option>Beleza</option>
            <option>Saúde</option>
            <option>Alimentação</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium dark:text-white">Senha</label>
          <input v-model="senha" type="password" placeholder="********"
            class="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white outline-none" />
        </div>
      </div>

      <!-- Gênero -->
      <div>
        <label class="block text-sm font-medium dark:text-white mb-2">Gênero</label>
        <div class="flex flex-wrap gap-6">
          <label class="flex items-center gap-2">
            <input v-model="genero" type="radio" name="gender" value="Feminino" class="text-black focus:ring-black" />
            <span>Feminino</span>
          </label>
          <label class="flex items-center gap-2">
            <input v-model="genero" type="radio" name="gender" value="Masculino" class="text-black focus:ring-black" />
            <span>Masculino</span>
          </label>
          <label class="flex items-center gap-2">
            <input v-model="genero" type="radio" name="gender" value="Outros" class="text-black focus:ring-black" />
            <span>Outros</span>
          </label>
          <label class="flex items-center gap-2">
            <input v-model="genero" type="radio" name="gender" value="Prefiro não informar"
              class="text-black focus:ring-black" />
            <span>Prefiro não informar</span>
          </label>
        </div>
      </div>

      <!-- Botões -->
      <div class="flex justify-end">
        <button type="submit"
          class="bg-green-vision hover:bg-green-vision/70 text-black font-semibold py-2 px-6 rounded-lg">
          Continuar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nome = ref('')
const email = ref('')
const celular = ref('')
const cpf = ref('')
const cep = ref('')
const rua = ref('')
const categoria = ref('')
const senha = ref('')
const genero = ref('')

// Função que envia os dados para o backend
async function handleSubmit() {
  // Pode fazer validação básica aqui antes de enviar

  const dados = {
    nome: nome.value,
    email: email.value,
    celular: celular.value,
    cpf: cpf.value,
    cep: cep.value,
    rua: rua.value,
    categoria: categoria.value,
    senha: senha.value,
    genero: genero.value
  }

  try {
    const res = await fetch('http://localhost:3000/registro-empresa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    })

    if (!res.ok) {
      const error = await res.json()
      alert('Erro: ' + (error.message || 'Não foi possível cadastrar'))
      return
    }

    alert('Empresa cadastrada com sucesso!')
    router.push('/home-negocio')
  } catch (err) {
    alert('Erro no servidor: ' + err.message)
  }
}
</script>
