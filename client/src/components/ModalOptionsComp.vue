<template>
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-xl relative">
      <h2 class="text-2xl font-semibold mb-6 text-center">Escolha o que você quer fazer?</h2>

      <div class="space-y-4">
        <button @click="handleGoTo('/registro', 'registro')" class="w-full bg-[#00ff88] py-2 rounded-xl transition">
          Cadastra-se
        </button>

        <button @click="handleGoTo('/login', 'login')"
          class="w-full border border-black text-black py-2 rounded-xl hover:bg-neutral-100 transition">
          Login
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const authOption = ref('')

const handleGoTo = (path, option) => {
  authOption.value = option
  localStorage.setItem('auth_option', authOption.value)
  router.push(path)
}
</script>
