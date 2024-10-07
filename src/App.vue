<template>
  <main class="min-h-screen bg-slate-700 grid place-items-center p-6">
    <div class="absolute top-4 right-4 text-white">
      <i class="fa-solid fa-bookmark text-3xl"></i>
      <span class="grid place-items-center h-8 w-8 bg-red-600 rounded-full text-center text-slate-50 relative -top-12 -right-2">
        {{ bookmarkStore.getBookmarkCount }}
      </span>
    </div>
    
    <section v-if="loading" class="text-white">Memuat...</section>
    <section v-if="error" class="text-red-500">{{ error }}</section>
    <section v-if="!loading && quotes.length > 0" class="w-8/12 grid grid-cols-1 gap-6">
      <template v-for="quote in quotes" :key="quote.id">
        <QuoteCard :quote="quote" />
      </template>
    </section>
    <p v-else-if="!loading && quotes.length === 0" class="text-white">Tidak ada kutipan yang ditemukan.</p>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import QuoteCard from './components/QuoteCard.vue';
import { useQuotesStore } from './stores/QuotesStore';
import { useBookmarkStore } from './stores/bookmark';
import feather from 'feather-icons';

const quotesStore = useQuotesStore();
const bookmarkStore = useBookmarkStore();

onMounted(async () => {
  feather.replace();
  if (quotesStore.quotes.length === 0) {
    await quotesStore.fetchQuotes();
  }
});

const { quotes, loading, error } = quotesStore;
</script>
