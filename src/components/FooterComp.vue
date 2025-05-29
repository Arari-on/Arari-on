<template>
  <footer class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-12 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

        <!-- Ararion Info -->
        <div class="space-y-4">
          <div class="flex items-center">
            <LucideInstagram class="h-8 w-8 text-indigo-400 dark:text-indigo-400" />
            <span class="ml-2 text-xl font-bold">Ararion</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400">Soluções criativas para o seu negócio crescer com presença online.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition" aria-label="Facebook">
              <LucideFacebook class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition" aria-label="Twitter">
              <LucideTwitter class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition" aria-label="Instagram">
              <LucideInstagram class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition" aria-label="LinkedIn">
              <LucideLinkedin class="h-6 w-6" />
            </a>
          </div>
        </div>

        <!-- Links rápidos -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Navegação</h3>
          <ul class="space-y-2">
            <li><a href="#hero" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition">Início</a></li>
            <li><a href="#sobre" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition">Sobre</a></li>
            <li><a href="#pacotes" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition">Pacotes</a>
            </li>
            <li><a href="#contato" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition">Contato</a>
            </li>
          </ul>
        </div>

        <!-- Serviços -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Soluções</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition">Divulgação
                Digital</a>
            </li>
            <li><a href="#" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition">Criação de Landing
                Pages</a></li>
            <li><a href="#" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition">Gestão de
                Tráfego</a>
            </li>
            <li><a href="#" class="text-gray-400 dark:text-gray-500 hover:text-gray-300 transition">Design Visual</a>
            </li>
          </ul>
        </div>

        <!-- Contato -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Fale com a gente</h3>
          <address class="not-italic text-gray-600 dark:text-gray-400">
            <p>Rua das Soluções, 123</p>
            <p>São Paulo - SP, 01234-567</p>
            <p class="mt-2">Email: <a href="mailto:contato@ararion.com"
                class="hover:text-white transition">contato@ararion.com</a></p>
            <p>WhatsApp: <a href="https://wa.me/5511999999999" class="hover:text-white transition">+55 (11)
                99999-9999</a></p>
          </address>
        </div>
      </div>

      <div
        class="border-t border-gray-800 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">© 2025 Ararion. Todos os direitos reservados.
        </p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-white text-sm transition">Política de
            Privacidade</a>
          <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-white text-sm transition">Termos de Uso</a>
          <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-white text-sm transition">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { LucideInstagram, LucideFacebook, LucideLinkedin, LucideTwitter } from 'lucide-vue-next'
</script>
