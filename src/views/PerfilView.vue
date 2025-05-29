<template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
    <div class="flex items-center space-x-6">
      <!-- Foto de perfil -->
      <div class="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
        <LucideUser class="w-12 h-12 text-gray-500" />
      </div>

      <!-- Dados principais -->
      <div>
        <h2 class="text-2xl font-bold">{{ user.nome }}</h2>
        <p class="text-gray-600">{{ user.email }}</p>
        <p class="text-gray-600">{{ user.telefone }}</p>
      </div>
    </div>

    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-4">Informações do Perfil</h3>
      <div class="space-y-4">
        <div class="flex justify-between">
          <span class="font-medium text-gray-700">Nome</span>
          <span>{{ user.nome }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-700">E-mail:</span>
          <span>{{ user.email }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-700">Telefone:</span>
          <span>{{ user.telefone }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-700">CPF:</span>
          <span>{{ user.cpf }}</span>
        </div>

        <div class="flex justify-between">
          <span class="font-medium text-gray-700">CEP:</span>
          <span>{{ user.cep }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-700">Rua:</span>
          <span>{{ user.rua }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-700">Categoria:</span>
          <span>{{ user.categoria }}</span>
        </div>

        <div class="flex justify-between">
          <span class="font-medium text-gray-700">Cadastrado em:</span>
          <span>{{ user.cadastradoEm }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LucideUser } from 'lucide-vue-next'

const user = {
  nome: 'Maria Clara Barreto da Silva',
  email: 'mariaclara@gmail.com',
  telefone: '(88) 99999-9999',
  cpf: '123.456.789-00',
  cep: '62010-000',
  rua: 'Rua Aleatoriaa, 123',
  categoria: 'Cuidador',
  cadastradoEm: '28/05/2025'
}
</script>
