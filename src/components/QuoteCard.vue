<template>
  <section class="bg-black/50 p-6 rounded-lg">
    <div class="flex justify-between items-center">
      <blockquote class="text-center text-white italic text-lg flex-grow">
        "{{ quote.indo }}"
      </blockquote>
      <button @click="toggleBookmark" class="text-white text-2xl hover:text-gray-400 ml-4">
        <i :class="isBookmarked ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'"></i>
      </button>
    </div>
    <p class="text-right text-gray-500 mt-2">- {{ quote.character }} ({{ quote.anime }})</p>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useBookmarkStore } from '@/stores/bookmark';

const props = defineProps({
  quote: Object,
});

const bookmarkStore = useBookmarkStore();
const isBookmarked = computed(() => bookmarkStore.isBookmarked(props.quote.id));

const toggleBookmark = () => {
  bookmarkStore.addBookmark(props.quote.id);
};
</script>
