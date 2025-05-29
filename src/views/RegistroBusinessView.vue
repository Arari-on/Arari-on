<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-4xl font-bold mb-8 text-black">Registro de Empresa</h1>

    <form class="space-y-8 w-full mx-auto">
      <!-- Linha 1 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">Nome</label>
          <input type="text" placeholder="Digite seu nome completo"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black outline-none" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" placeholder="seuemail@exemplo.com"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black outline-none" />
        </div>
      </div>

      <!-- Linha 2 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">Celular</label>
          <input type="tel" placeholder="(xx) xxxxx-xxxx"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black outline-none" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">CPF</label>
          <input type="text" placeholder="000.000.000-00"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black outline-none" />
        </div>
      </div>

      <!-- Linha 3 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">CEP</label>
          <input type="text" placeholder="Digite seu CEP"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black outline-none" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Rua</label>
          <input type="text" placeholder="Digite o nome da sua rua"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black outline-none" />
        </div>
      </div>

      <!-- Linha 4 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">Categoria</label>
          <select
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black outline-none">
            <option>Beleza</option>
            <option>Moda</option>
            <option>Cosméticos</option>
            <option>Tecnologia</option>
            <option>Saúde</option>
            <option>Turismo</option>
            <option>Alimentação</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Senha</label>
          <input type="password" placeholder="********"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black outline-none" />
        </div>
      </div>

      <!-- Gênero -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Gênero</label>
        <div class="flex flex-wrap gap-6">
          <label class="flex items-center gap-2">
            <input type="radio" name="gender" class="text-black focus:ring-black" />
            <span>Feminino</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" name="gender" class="text-black focus:ring-black" />
            <span>Masculino</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" name="gender" class="text-black focus:ring-black" />
            <span>Outros</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" name="gender" class="text-black focus:ring-black" />
            <span>Prefiro não informar</span>
          </label>
        </div>
      </div>

      <!-- Botões -->
      <div class="flex justify-end">
        <!-- <button type="button" class="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-6 rounded-lg">
          Entrar
        </button> -->
        <button type="submit" class="bg-[#00ff88] hover:bg-[#00ff88]/70 text-black font-semibold py-2 px-6 rounded-lg">
          Continuar
        </button>
      </div>
    </form>
  </div>
</template>
