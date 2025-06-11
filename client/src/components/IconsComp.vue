<script setup>
import { computed } from 'vue';
import * as icons from 'lucide-vue-next';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 18
  },
  color: String,
  strokeWidth: {
    type: Number,
    default: 2
  },
  class: {
    type: String,
    default: ''
  }
});

const icon = computed(() => icons[props.name] || null);
</script>

<template>
  <component :is="icon" :size="size" :color="color" :stroke-width="strokeWidth" :class="props.class" />
</template>
