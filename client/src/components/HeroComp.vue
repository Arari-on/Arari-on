<template>
  <div class="relative isolate overflow-hidden bg-white dark:bg-gray-900">
    <!-- Background SVG decorativo -->
    <svg
      class="absolute inset-0 -z-10 h-full w-full stroke-black/10 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true">
      <defs>
        <pattern id="grid-pattern" width="100" height="100" x="100%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none"></path>
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-200/20 dark:fill-gray-800/20">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          stroke-width="0"></path>
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#grid-pattern)"></rect>
    </svg>

    <!-- Blur colorido de fundo -->
    <div
      class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      aria-hidden="true">
      <div
        class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-blue-400 to-indigo-600 opacity-20 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-blue-400"
        style="clip-path:polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)">
      </div>
    </div>

    <!-- Conteúdo central -->
    <div class="mt-[-50px] flex h-screen items-center justify-center">
      <div class="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
        <h1 class="mt-10 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          destaque sua marca com o
          <span class="text-blue-500 dark:text-blue-400">poder da divulgação</span><br />
          através do <span class="text-blue-500 dark:text-blue-400">Arari-ON</span>
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-400">
          A solução ideal para empresas que querem crescer com campanhas personalizadas, simples e eficazes.
        </p>
        <div class="mt-5 flex items-center justify-center gap-x-6">
          <a href="#sobre"
            class="rounded-md bg-blue-500 text-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-400 dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-500 transition">
            Sobre o Arari-ON
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
// Nenhum script necessário por enquanto
</script>

<style scoped></style>
