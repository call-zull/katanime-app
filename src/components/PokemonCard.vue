<template>
    <section class="bg-white">
        <img :src="generateImageUrl()" class="w-full">
        <!-- footer -->
        <section class="p-6 uppercase text-center">
            <p>{{ props.pokemon.name.split("-").join(" ") }}</p>
        </section>
    </section>
</template>

<script setup>

// props
const props = defineProps({
    pokemon: Object
})

// handler: generate image url
const generateImageUrl = () => {

    // get ID
    const id = props.pokemon.url.split("/")[6]

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

</script>