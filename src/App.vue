<template>
  <main class="min-h-screen bg-slate-100 grid place-items-center p-6">
    <!-- wrapper -->
    <section v-if="pokemons" class="w-8/12 grid grid-cols-5 gap-3">
      <template v-for="pokemon in pokemons" :key="pokemon.url">
        <PokemonCard class="col-span-1" :pokemon="pokemon" />
      </template>
    </section>

    <!-- loading state -->
    <p v-else>
      loading...
    </p>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PokemonCard from './components/PokemonCard.vue';

// refs
const pokemons = ref()

onMounted(() => {

  setTimeout(async () => {

    const res = await fetch("https://pokeapi.co/api/v2/item")

    // parse data
    const data = await res.json()

    // updated state
    pokemons.value = data.results
  }, 2000)
})

</script>