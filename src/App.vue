<template>
  <main class="min-h-screen bg-slate-700 grid place-items-center p-6">
    <!-- wrapper -->
    <section v-if="quotes" class="w-8/12 grid grid-cols-1 gap-6">
      <template v-for="quote in quotes" :key="quote.id">
        <QuoteCard :quote="quote" />
      </template>
    </section>

    <!-- loading state -->
    <p v-else>
      Memuat...
    </p>
  </main>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import QuoteCard from './components/QuoteCard.vue';

// refs
const quotes = ref()

onMounted(async () => {
  try {
    const res = await fetch("https://katanime.vercel.app/api/getrandom")
    const data = await res.json()

    if (data.sukses) {
      quotes.value = data.result
    }
  } catch (error) {
    console.error("Gagal memuat data:", error)
  }
})

onUpdated(() => {
  console.log('Data kutipan telah diperbarui:', quotes.value);
});
</script>
