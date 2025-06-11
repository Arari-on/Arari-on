<template>
  <section id="sobre" class="relative overflow-hidden py-24 px-6 sm:px-10 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- Imagem com efeito -->
      <div class="relative">
        <div class="relative z-10">
          <img src="https://i.imgur.com/WbQnbas.png" alt="Ararion illustration"
            class="w-full max-w-md mx-auto drop-shadow-xl" />
        </div>
        <div
          class="absolute -top-10 -left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0"
          aria-hidden="true"></div>
      </div>

      <!-- Texto com destaque -->
      <div class="text-left">
        <span
          class="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 pb-1">
          Sobre o Ararion
        </span>
        <h2 class="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Transforme sua marca com <span class="text-indigo-600 dark:text-indigo-400">divulgação inteligente</span>
        </h2>
        <p class="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          O Ararion é uma plataforma feita para empresas que querem impactar mais pessoas.
          Oferecemos pacotes flexíveis e soluções práticas para destacar sua marca no mercado com agilidade e
          eficiência.
        </p>
        <div class="mt-8">
          <a href="#pacotes"
            class="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-md transition shadow-md hover:shadow-lg">
            Conheça os Pacotes →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nada por enquanto, mas pronto pra evoluir com Vue transitions se quiser
</script>

<style scoped></style>
