<template>
  <div class="w-full max-w-screen min-h-screen overflow-x-hidden box-border space-y-15">
    <!-- Slides -->
    <div v-if="!categoriaSelecionada" class="relative rounded-xl shadow-lg mb-10 max-w-screen overflow-hidden">
      <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="min-w-full h-[450px] bg-cover bg-center"
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
    <div v-if="!categoriaSelecionada" class="flex justify-center gap-2 mt-4">
      <button v-for="(image, index) in images" :key="index" @click="currentIndex = index" :class="[
        'w-3 h-3 rounded-full',
        currentIndex === index ? 'bg-gray-400' : 'bg-gray-700'
      ]"></button>
    </div>


    <!-- Perfis -->
    <div class="mt-10 px-4 sm:px-6 lg:px-8">
      <div v-if="filteredPerfis.length === 0"
        class="flex justify-center items-center gap-2 text-gray-400 text-base sm:text-lg mt-10">
        <LucideCircleAlert class="w-6 h-6" />
        Nenhum perfil encontrado para esta categoria.
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 sm:gap-10">
        <router-link v-for="(perfil, index) in filteredPerfis" :key="perfil.id || index" :to="`/perfil/${index}`"
          :class="[
            'relative bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-[1.03] hover:shadow-xl',
            favoritos.includes(perfil.id) ? 'ring-2 ring-red-400' : '',
            'flex flex-col h-full'
          ]">
          <!-- Botão de favorito -->
          <button @click.stop.prevent="toggleFavorito(perfil.id)"
            class="absolute top-3 right-3 z-20 bg-white bg-opacity-90 rounded-full p-2 shadow hover:bg-opacity-100 transition"
            aria-label="Favoritar perfil">
            <span v-if="favoritos.includes(perfil.id)" class="text-red-500 text-xl">❤️</span>
            <span v-else class="text-gray-400 text-xl">🤍</span>
          </button>

          <!-- Imagem do perfil -->
          <div class="w-full aspect-[4/3] bg-gray-200 overflow-hidden">
            <img :src="perfil.imagem" alt="Imagem do portfólio"
              class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              loading="lazy" decoding="async" />
          </div>

          <!-- Conteúdo do card -->
          <div class="p-4 flex flex-col flex-grow">
            <h3 class="text-lg font-semibold text-gray-800 truncate" :title="perfil.titulo">
              {{ perfil.titulo }}
            </h3>
            <p class="text-gray-600 text-sm mt-1 line-clamp-3 flex-grow" :title="perfil.descricao">
              {{ perfil.descricao }}
            </p>
          </div>
        </router-link>
      </div>
    </div>


    <div v-if="!categoriaSelecionada" class="border-b border-green-500 w-[800px] mx-auto mb-10"></div>

    <!-- Portfólios com fotos -->
    <div v-if="!categoriaSelecionada" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:mx-20">
      <div v-for="(item, index) in itemsComImagens" :key="index" class="bg-white p-1 rounded-lg shadow-md">
        <!-- Slide de imagens -->
        <div class="relative w-full overflow-hidden rounded-xl shadow-lg">
          <div class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndexes[index] * 100}%)` }">
            <div v-for="(img, i) in item.imagens" :key="i"
              class="w-full min-w-full flex-shrink-0 h-80 sm:h-96 md:h-[28rem]">
              <img :src="img" alt="Slide"
                class="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 block" />
            </div>
          </div>

          <!-- Botões de navegação -->
          <button @click="prevPortfolio(index)"
            class="absolute top-1/2 left-2 -translate-y-1/2 bg-white text-gray-700 bg-opacity-70 hover:bg-opacity-90 shadow-md rounded-full p-1 transition">
            <LucideChevronLeft class="w-4 h-4" />
          </button>
          <button @click="nextPortfolio(index, item.imagens.length)"
            class="absolute top-1/2 right-2 -translate-y-1/2 bg-white text-gray-700 bg-opacity-70 hover:bg-opacity-90 shadow-md rounded-full p-1 transition">
            <LucideChevronRight class="w-4 h-4" />
          </button>

          <!-- Dots de navegação -->
          <div class="absolute bottom-3 w-full flex justify-center space-x-2">
            <span v-for="(img, i) in item.imagens" :key="i" class="w-2.5 h-2.5 rounded-full"
              :class="currentIndexes[index] === i ? 'bg-green-500' : 'bg-gray-300'"></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { LucideChevronLeft, LucideChevronRight, LucideCircleAlert } from 'lucide-vue-next'
import axios from 'axios'
import image1 from '../assets/slides/slide1.png'
import image2 from '../assets/slides/slide2.png'
import { useRoute } from 'vue-router'

const route = useRoute()
const categoriaSelecionada = route.query.categoria?.toLowerCase() || null

const filteredPerfis = computed(() => {
  const categoriaSelecionada = route.query.categoria?.toLowerCase()
  if (!categoriaSelecionada) return perfis.value

  return perfis.value.filter(perfil =>
    perfil.categoria?.toLowerCase() === categoriaSelecionada
  )
})



// Slides
const images = [image1, image2]
const currentIndex = ref(0)

// Índice de slide atual por item
const currentIndexes = ref([])

const nextPortfolio = (index, totalImages) => {
  currentIndexes.value[index] = (currentIndexes.value[index] + 1) % totalImages
}
const prevPortfolio = (index) => {
  currentIndexes.value[index] = (currentIndexes.value[index] - 1 + itemsComImagens.value[index].imagens.length) % itemsComImagens.value[index].imagens.length
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

// Simula usuário logado
const userId = 1 // Substituir por ID do usuário autenticado
const favoritos = ref([])

const toggleFavorito = async (empresaId) => {
  if (!empresaId) return console.warn('ID inválido');

  const perfil = perfis.value.find(p => p.id === empresaId)
  if (!perfil) return console.warn('Perfil não encontrado');

  // Verifica se é mockado (pode ajustar critério se quiser)
  const isMockado = empresaId <= 1000

  if (isMockado) {
    const localFavoritos = JSON.parse(localStorage.getItem('favoritosMock') || '[]');
    const jaFavoritado = localFavoritos.some(p => p.id === empresaId)

    let atualizados
    if (jaFavoritado) {
      atualizados = localFavoritos.filter(p => p.id !== empresaId)
      favoritos.value = favoritos.value.filter(id => id !== empresaId)
    } else {
      atualizados = [...localFavoritos, perfil]
      favoritos.value.push(empresaId)
    }

    localStorage.setItem('favoritosMock', JSON.stringify(atualizados))
    console.log(`Favorito ${jaFavoritado ? 'removido' : 'adicionado'} no localStorage:`, perfil)
    return
  }

  // Backend (empresa real do banco)
  try {
    await axios.post('http://localhost:3000/favoritar', {
      userId,
      empresaId,
    })

    if (favoritos.value.includes(empresaId)) {
      favoritos.value = favoritos.value.filter(id => id !== empresaId)
    } else {
      favoritos.value.push(empresaId)
    }

    console.log(`Favorito salvo no backend: ${empresaId}`)
  } catch (error) {
    console.error('Erro ao favoritar:', error)
  }
};

// Carregar favoritos do usuário
const carregarFavoritos = async () => {
  try {
    const localFavoritos = JSON.parse(localStorage.getItem('favoritosMock') || '[]')
    const mockIds = localFavoritos.map(p => p.id)

    const res = await axios.get(`http://localhost:3000/usuarios/${userId}/favoritos`)
    const backendFavoritos = res.data.map(emp => emp.id)

    favoritos.value = [...backendFavoritos, ...mockIds]
  } catch (error) {
    console.error('Erro ao carregar favoritos:', error)
    // Se falhar a requisição, só carrega os locais
    const localFavoritos = JSON.parse(localStorage.getItem('favoritosMock') || '[]')
    favoritos.value = localFavoritos.map(p => p.id)
  }
}

const carregarPerfisBackend = async () => {
  try {
    const res = await axios.get('http://localhost:3000/perfis') // ajuste a url conforme sua API

    // Mapear os perfis do backend para o formato esperado no frontend
    const perfisBackend = res.data.map(perfil => ({
      id: perfil.id,
      titulo: perfil.titulo,            // título do perfil (ex: Psicólogo Lucas)
      descricao: perfil.descricao,      // descrição do perfil
      imagem: perfil.imagem
        ? (perfil.imagem.startsWith('http')
          ? perfil.imagem
          : `http://localhost:3000${perfil.imagem}`)
        : 'https://via.placeholder.com/400x300?text=Sem+Imagem',
      instagram: perfil.instagram || '',
      contato: perfil.contato || '',
      endereco: perfil.endereco || '',
      catalogo: perfil.catalogo || [],
      categoria: perfil.categoria || 'Outros' // se existir campo categoria no backend, senão default
    }))

    // Juntar perfis backend com perfis estáticos
    perfis.value = [...perfis.value, ...perfisBackend]
  } catch (error) {
    console.error('Erro ao carregar perfis do backend:', error)
  }
}


// Portfólios mockados
const perfis = ref([
  {
    id: 1,
    titulo: 'Psicologia',
    descricao: 'Conselhos e soluções para problemas de saúde.',
    imagem: new URL('../assets/perfils/perfil1/logo.jpeg', import.meta.url).href,
    categoria: 'Saúde'
  },
  {
    id: 2,
    titulo: 'Manicure',
    descricao: 'Serviços de beleza para suas unhas.',
    imagem: new URL('../assets/perfils/perfil3/logo.png', import.meta.url).href,
    categoria: 'Beleza'
  },
  {
    id: 3,
    titulo: 'Corretora de Imóveis',
    descricao: 'Especializada em venda e locação de imóveis residenciais e comerciais.',
    imagem: new URL('../assets/perfils/perfil4/logo.jpeg', import.meta.url).href,
    categoria: 'Imóveis'
  },
  {
    id: 4,
    titulo: 'Manicure',
    descricao: 'Serviços de beleza para suas unhas.',
    imagem: new URL('../assets/perfils/perfil5/logo.jpeg', import.meta.url).href,
    categoria: 'Beleza'
  },
  {
    id: 5,
    titulo: 'Semijoias',
    descricao: 'Joias e acessórios em prata e ouro.',
    imagem: new URL('../assets/perfils/perfil6/logo.jpeg', import.meta.url).href,
    categoria: 'Moda'
  },
  {
    id: 6,
    titulo: 'Mercadão de Wilson Mendes',
    descricao: 'Supermercado e quitanda com produtos frescos e de qualidade.',
    imagem: new URL('../assets/perfils/perfil7/logo.jpeg', import.meta.url).href,
    categoria: 'Alimentação'
  },
  {
    id: 7,
    titulo: 'Salão de Beleza',
    descricao: 'Cortes, colorações, tratamentos e maquiagem.',
    imagem: new URL('../assets/perfils/perfil8/logo.jpeg', import.meta.url).href,
    categoria: 'Beleza'
  },
  {
    id: 8,
    titulo: 'Arena FitClub',
    descricao: 'Academia e espaço de esportes.',
    imagem: new URL('../assets/perfils/perfil9/logo.jpeg', import.meta.url).href,
    categoria: 'Fitness'
  }
])

const itemsComImagens = ref([
  {
    titulo: 'Portfólio 1',
    imagens: [
      new URL('../assets/portfolios/portfolio2/1.png', import.meta.url).href,

      new URL('../assets/portfolios/portfolio2/2.png', import.meta.url).href,
    ]
  },
  {
    titulo: 'Portfólio 2',
    imagens: [
      new URL('../assets/portfolios/portfolio3/3.png', import.meta.url).href,

      new URL('../assets/portfolios/portfolio3/1.png', import.meta.url).href,

      new URL('../assets/portfolios/portfolio3/2.png', import.meta.url).href,

    ]
  },
  {
    titulo: 'Conteúdo 3',
    imagens: [
      new URL('../assets/portfolios/portfolio4/1.png', import.meta.url).href,

      new URL('../assets/portfolios/portfolio4/2.png', import.meta.url).href,

    ]
  },
])



onMounted(() => {
  currentIndexes.value = itemsComImagens.value.map(() => 0)
  carregarPerfisBackend()
  carregarFavoritos()
})
</script>
