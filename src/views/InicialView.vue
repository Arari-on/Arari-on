<template>
  <div class="w-full max-w-3xl mx-auto">
    <div class="relative overflow-hidden rounded-xl shadow-lg">
      <!-- Slides -->
      <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="min-w-full h-64 bg-cover bg-center"
          :style="{ backgroundImage: `url(${image})` }"></div>
      </div>

      <!-- Botões prev/next -->
      <button @click="prevSlide"
        class="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition">
        <LucideChevronLeft class="w-6 h-6 text-gray-900" />
      </button>
      <button @click="nextSlide"
        class="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition">
        <LucideChevronRight class="w-6 h-6 text-gray-900" />
      </button>
    </div>

    <!-- Dots -->
    <div class="flex justify-center gap-2 mt-4">
      <button v-for="(image, index) in images" :key="index" @click="currentIndex = index" :class="[
        'w-3 h-3 rounded-full',
        currentIndex === index ? 'bg-gray-400' : 'bg-gray-900'
      ]"></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-vue-next'

const images = [
  'https://placehold.co/800x400',
  'https://placehold.co/600x400',
  'https://placehold.co/1000x400',
]

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length
}
</script>
