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

    <!-- Lado Direito - Escolha -->
    <div class="flex justify-center items-center p-8 animate-fade-in">
      <div class="w-full max-w-lg bg-green-vision rounded-2xl shadow-2xl p-8">
        <div class="flex justify-center items-center mb-4 animate-fade-in">
          <img src="../assets/images/vertente_completa.png" alt="" class="w-32">
        </div>

        <div class="space-y-5">
          <button @click="handleGoTo('/register')"
            class="w-full bg-midnight-blue py-2 rounded-lg  transition font-semibold text-white cursor-pointer">
            Cadastrar-se
          </button>

          <button @click="handleGoTo('/login')"
            class="w-full border-2 border-midnight-blue text-midnight-blue py-2 rounded-lg transition font-semibold cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import router from '@/router'

const handleGoTo = (path) => {
  router.push(path)
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
