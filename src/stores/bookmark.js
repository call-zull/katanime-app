import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useBookmarkStore = defineStore(
  "bookmark-store",
  () => {
    const bookmarks = ref([]);

    const addBookmark = (quoteId) => {
      if (bookmarks.value.includes(quoteId)) {
        bookmarks.value = bookmarks.value.filter((id) => id !== quoteId);
      } else {
        bookmarks.value.push(quoteId);
      }
    };

    const isBookmarked = (quoteId) => bookmarks.value.includes(quoteId);

    const getBookmarkCount = computed(() => bookmarks.value.length);

    return { bookmarks, addBookmark, isBookmarked, getBookmarkCount };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);
