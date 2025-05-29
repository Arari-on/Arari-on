<template>
  <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-midnight-blue">
    <!-- Lado Esquerdo -->
    <div class="hidden md:flex flex-col justify-center items-center space-y-4 animate-fade-in">
      <h1 class="text-6xl font-bold text-white mb-2">Arari-on</h1>
      <p class="text-lg text-gray-300 text-center mt-2">
        "Inovando o comércio, conectando negócios, gerando sucesso!"
      </p>
      <img src="../assets/images/online-world-animate.svg" alt="Imagem Cadastro" class="max-w-[600px] w-full" />
    </div>

    <!-- Lado Direito - Formulário -->
    <div class="flex justify-center items-center p-8 animate-fade-in">
      <div class="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
        <h2 class="text-4xl font-bold mb-6 text-center text-black">Cadastro</h2>
        <form @submit.prevent="handleRegister" class="space-y-5">
          <div>
            <label for="nome" class="block text-sm font-medium text-gray-700">Nome</label>
            <input id="nome" type="text" v-model="nome" placeholder="Seu nome completo"
              class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black" />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" type="email" v-model="email" placeholder="seuemail@exemplo.com"
              class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black" />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" placeholder="********"
                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black" />
              <button type="button" @click="togglePassword"
                class="absolute inset-y-0 right-0 px-3 py-2 text-sm font-medium text-gray-600 hover:text-black transition">
                {{ showPassword ? 'Esconder' : 'Mostrar' }}
              </button>
            </div>
          </div>

          <button type="submit"
            class="w-full bg-[#00ff88] py-2 rounded-lg hover:bg-[#00ff88]/70 transition font-semibold flex items-center justify-center">
            <span v-if="loading" class="loader"></span>
            <span v-else>Cadastrar</span>
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-gray-600">
            Já tem uma conta?
            <router-link to="/login" class="text-[#00ff88] font-bold hover:underline">Faça login</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleRegister = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    console.log('Nome:', nome.value)
    console.log('Email:', email.value)
    console.log('Senha:', password.value)
    router.replace('/login')
  }, 2000)
}
</script>

<style scoped>
.loader {
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
