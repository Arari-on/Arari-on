<template>
  <section id="contato" class="relative bg-gray-100 dark:bg-gray-800 py-20 px-6 text-gray-400 dark:text-gray-300">
    <div class="container mx-auto">
      <div class="mb-12 text-center">
        <h3 class="text-indigo-400 text-sm uppercase tracking-widest mb-2">Contato</h3>
        <h2 class="text-gray-900 dark:text-white text-3xl sm:text-4xl font-bold mb-4">Fale com a gente</h2>
        <p class="max-w-2xl mx-auto text-base">
          Tem dúvidas, sugestões ou deseja um orçamento? Envie uma mensagem que retornamos rapidinho!
        </p>
      </div>

      <div class="mx-auto max-w-2xl">
        <form class="grid gap-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-indigo-400 mb-1">Nome</label>
              <input type="text" id="name" name="name" placeholder="Seu nome"
                class="w-full rounded-lg bg-gray-800 border border-gray-800 py-3 px-4 text-gray-100 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-indigo-400 mb-1">Email</label>
              <input type="email" id="email" name="email" placeholder="seu@email.com"
                class="w-full rounded-lg bg-gray-800 border border-gray-800 py-3 px-4 text-gray-100 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400" />
            </div>
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-indigo-400 mb-1">Mensagem</label>
            <textarea id="message" name="message" rows="5" placeholder="Escreva sua mensagem aqui..."
              class="w-full rounded-lg bg-gray-800 border border-gray-800 py-3 px-4 text-gray-100 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 resize-none"></textarea>
          </div>
          <div class="text-center">
            <button type="submit"
              class="inline-block rounded-lg bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 text-white font-semibold dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Enviar mensagem
            </button>
          </div>
        </form>

        <div class="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Email: <a href="mailto:contato@ararion.com.br"
              class="text-indigo-400 hover:underline">contato@ararion.com.br</a></p>
          <p class="mt-1">Endereço: Rua Exemplo, 123 - Centro, Sua Cidade</p>
        </div>
      </div>
    </div>
  </section>
</template>
