<template>
  <div class="font-sans bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
    <Header />

    <main>
      <Hero />
      <Sobre />
      <Pacotes />
      <Contato />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/HeaderComp.vue'
import Hero from '@/components/HeroComp.vue'
import Pacotes from '@/components/PricingCards.vue'
import Sobre from '@/components/AboutComp.vue'
import Contato from '@/components/ContactComp.vue'
import Footer from '@/components/FooterComp.vue'
</script>
