// stores/quotesStore.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useQuotesStore = defineStore(
  "quotes",
  () => {
    const quotes = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchQuotes = async () => {
      loading.value = true;
      error.value = null;

      try {
        const res = await fetch(
          "https://katanime.vercel.app/api/getbyanime?anime=naruto&page=1"
        );
        const data = await res.json();

        if (data.sukses) {
          quotes.value = data.result;
        } else {
          error.value = "Data tidak ditemukan";
        }
      } catch (err) {
        console.error("Gagal memuat data:", err);
        error.value = "Gagal memuat data";
      } finally {
        loading.value = false;
      }
    };

    const quotesCount = computed(() => quotes.value.length);

    return {
      quotes,
      loading,
      error,
      fetchQuotes,
      quotesCount,
    };
  },
  {
    persist: true, // Menyimpan seluruh state secara otomatis
  }
);
