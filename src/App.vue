<script setup>
// import { ref, onMounted } from 'vue'
// import AuthModal from '@/components/ModalOptionsComp.vue'

// const showModal = ref(false)

// onMounted(() => {
//   const escolha = localStorage.getItem('auth_option')
//   if (!escolha) {
//     showModal.value = true
//   }
// })
</script>

<template>
  <div id="app" class="scroll-smooth">
    <!-- Modal aparece se não tiver escolha salva -->
    <!-- <AuthModal v-if="showModal" @close="showModal = false" /> -->

    <!-- Roteador -->
    <RouterView />
  </div>
</template>

<style scoped></style>
