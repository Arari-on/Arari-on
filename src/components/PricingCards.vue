<template>
  <section id="pacotes" class="py-20 px-6 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto text-center">
      <h3 class="text-indigo-400 text-sm uppercase tracking-widest mb-2">Nossos Pacotes</h3>
      <h2 class="text-gray-900 dark:text-white text-3xl sm:text-4xl font-bold mb-4">Planos que se adaptam ao seu negócio
      </h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
        Escolha entre nossos planos estratégicos e potencialize sua presença com a Ararion.
      </p>
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <!-- Pacote Básico -->
        <div
          class="bg-gray-700 dark:bg-gray-800 rounded-xl border border-gray-600 dark:border-gray-500 p-8 text-white hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-2">Plano Essencial</h3>
          <p class="text-indigo-400 text-4xl font-bold mb-1">R$99</p>
          <p class="text-gray-400 dark:text-gray-300 mb-6">Ideal para começar sua divulgação</p>
          <ul class="space-y-3 text-sm mb-8">
            <li class="flex items-center">
              <CheckIcon /> Postagens semanais
            </li>
            <li class="flex items-center">
              <CheckIcon /> Design personalizado
            </li>
            <li class="flex items-center">
              <CheckIcon /> Relatório mensal
            </li>
          </ul>
          <button class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">Escolher
            plano</button>
        </div>

        <!-- Pacote Popular (Destaque) -->
        <div
          class="relative bg-gray-700 dark:bg-gray-800 border-2 border-indigo-500 dark:border-indigo-400 p-8 text-white shadow-xl transform hover:-translate-y-2 transition">
          <div
            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 dark:bg-indigo-500 px-4 py-1 text-sm font-semibold rounded-full">
            Mais Popular</div>
          <h3 class="text-xl font-semibold mb-2">Plano Profissional</h3>
          <p class="text-indigo-400 text-4xl font-bold mb-1">R$199</p>
          <p class="text-gray-400 dark:text-gray-300 mb-6">Para empresas que querem crescer</p>
          <ul class="space-y-3 text-sm mb-8">
            <li class="flex items-center">
              <CheckIcon /> Estratégia de marketing
            </li>
            <li class="flex items-center">
              <CheckIcon /> Gestão de redes sociais
            </li>
            <li class="flex items-center">
              <CheckIcon /> Análise de desempenho
            </li>
            <li class="flex items-center">
              <CheckIcon /> Atendimento dedicado
            </li>
          </ul>
          <button class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">Escolher
            plano</button>
        </div>

        <!-- Pacote Avançado -->
        <div
          class="bg-gray-700 dark:bg-gray-800 rounded-xl border border-gray-700 dark:border-gray-500 p-8 text-white hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-2">Plano Premium</h3>
          <p class="text-indigo-400 text-4xl font-bold mb-1">R$349</p>
          <p class="text-gray-400 dark:text-gray-300 mb-6">Soluções completas para empresas</p>
          <ul class="space-y-3 text-sm mb-8">
            <li class="flex items-center">
              <CheckIcon /> Gerenciamento completo
            </li>
            <li class="flex items-center">
              <CheckIcon /> Criação de campanhas
            </li>
            <li class="flex items-center">
              <CheckIcon /> Consultoria mensal
            </li>
            <li class="flex items-center">
              <CheckIcon /> Suporte prioritário
            </li>
          </ul>
          <button class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">Escolher
            plano</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Check } from 'lucide-vue-next'
import { h } from 'vue'

const CheckIcon = () => h(Check, { class: 'w-5 h-5 mr-2 text-indigo-400' })
</script>
