<template>
  <Nav back-url="/" wallet="true"/>

  <div class="min-h-[calc(100vh-6rem)]">

    <div class="contained">
      <Search @updatesearch="updateSearch"/>
    </div>

    <h2 class="contained text-gray-200 text-lg pt-8 pb-4">
      Categorias
    </h2>

    <Categories/>

    <h2 class="contained text-gray-200 text-lg pt-8 pb-4">
      Em exibição
    </h2>

    <MovieSlider :movie-props="filteredMoviesOnDisplay"/>

    <h2 class="contained text-gray-200 text-lg pt-8 pb-4">
      Brevemente
    </h2>

    <MovieSlider :movie-props="filteredMoviesComingSoon"/>

  </div>
</template>

<script setup>
import MovieSlider from '../components/movies/MovieSlider.vue';
import Categories from '../components/movies/Categories.vue';
import Search from '../components/movies/Search.vue';
import Nav from '../components/Nav.vue';
import { computed, ref } from 'vue';

const searchQuery = ref("");

const updateSearch = (value) => {
  searchQuery.value = value;
};

const moviesOnDisplay = [
  {
    title: 'Doutor Estranho',
    poster: '/movie-posters/doutor-estranho-multiverso-da-loucura.png',
  },
  {
    title: 'Notre-Dame Em Chamas',
    poster: '/movie-posters/notre-dame-em-chamas.png',
  },
  {
    title: 'A Vida Depois de Yang',
    poster: '/movie-posters/a-vida-depois-de-yang.png',
  },
  {
    title: 'Crime em Hollywood',
    poster: '/movie-posters/crime-em-hollywood.png',
  },
];

const moviesComingSoon = [
  {
    title: 'Top Gun',
    poster: '/movie-posters/top-gun-maverick.png',
  },
  {
    title: 'Thor: Amor e Trovão',
    poster: '/movie-posters/thor-love-and-thunder.png',
  },
  {
    title: 'A Besta',
    poster: '/movie-posters/a-besta.png',
  },
  {
    title: 'No Fio da Navalha',
    poster: '/movie-posters/no-fio-da-navalha.png',
  },
];

const filteredMoviesOnDisplay = computed(() => {
  return moviesOnDisplay.filter(movie => movie.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const filteredMoviesComingSoon = computed(() => {
  return moviesComingSoon.filter(movie => movie.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
});
</script>
