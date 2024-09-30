<template>
    <section class="bg-black/50 p-6 rounded-lg">
      <blockquote class="text-center text-white italic text-lg">
        "{{ quote.indo }}"
      </blockquote>
      <p class="text-right text-gray-500 mt-2">- {{ quote.character }} ({{ quote.anime }})</p>
    </section>
  </template>
  
  <script setup>
  const props = defineProps({
    quote: Object
  })
  </script>
  