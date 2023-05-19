<template>

  <div class="flex overflow-x-auto pb-4">

    <div class="flex-none px-1 w-40" v-for="(movie, index) in props.movieProps" :key="index">
      <router-link to="/seats">
        <img :src="movie.poster" :alt="movie.title"/>
        <p class="text-center max-w-full text-white">{{ movie.title }}</p>
      </router-link>
    </div>

    <div v-if="props.movieProps.length === 0" class="flex-none px-1 w-40">
      <p class="text-center max-w-full text-white">Não foram encontrados filmes</p>
    </div>

  </div>

</template>
<script setup>
const props = defineProps(['movieProps']);
</script>
