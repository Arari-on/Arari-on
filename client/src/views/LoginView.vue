<template>
  <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-midnight-blue">
    <!-- Lado Esquerdo -->
    <div class="hidden md:flex flex-col justify-center items-center space-y-4 animate-fade-in">
      <h1 class="text-6xl font-bold text-white mb-2">Arari-ON</h1>
      <p class="text-2xl text-gray-300 text-center mt-2">
        "Inovando o comércio, conectando negócios, gerando sucesso!"
      </p>
      <img src="../assets/images/online-world-animate.svg" alt="Imagem Login" class="max-w-[600px] w-full" />
    </div>

    <!-- Lado Direito - Formulário -->
    <div class="flex justify-center items-center p-8 animate-fade-in">
      <div class="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
        <h2 class="text-4xl font-bold mb-6 text-center text-black">Login</h2>
        <form @submit.prevent="handleLogin" class="space-y-5" @keydown.enter="validateForm">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" type="email" v-model="email" placeholder="seuemail@exemplo.com"
              class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black" />
          </div>

          <div>
            <label for="senha" class="block text-sm font-medium text-gray-700">Senha</label>
            <div class="relative">
              <input id="senha" type="password" v-model="senha" placeholder="********"
                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black" />
            </div>
          </div>

          <button type="submit"
            class="w-full bg-[#00ff88] py-2 rounded-lg hover:bg-[#00ff88]/70 transition font-semibold flex items-center justify-center">
            <span v-if="loading" class="loader"></span>
            <span v-else>Entrar</span>
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-gray-600">
            Não tem uma conta?
            <router-link to="/register" class="text-green-vision font-bold hover:underline">Cadastre-se</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const senha = ref('')
const loading = ref(false)

const handleLogin = async () => {
  if (!email.value || !senha.value) {
    alert('Preencha todos os campos!')
    return
  }

  loading.value = true

  try {
    const response = await axios.post('http://localhost:3000/login', {
      email: email.value,
      senha: senha.value
    })

    const user = response.data.user
    localStorage.setItem('user', JSON.stringify(user))

    alert(`Bem-vindo, ${user.nome}`)
    window.location.href = '/home'

  } catch (error) {
    console.error('Erro:', error)
    alert('Credenciais inválidas ou erro interno!')
  } finally {
    loading.value = false
  }
}
</script>


<style scoped>
/* Se quiser pode meter uns estilos extras aqui */
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
