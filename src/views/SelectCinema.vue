<template>
  <Nav/>

  <div class="contained min-h-[calc(100vh-6rem)] pt-8 pb-20">

    <h1 class="text-2xl mb-4 text-gray-300 font-thin">
      Selecionar Cinema
    </h1>

    <DropdownGroup/>

    <div class="absolute overflow-hidden bottom-6 mt-8 w-full flex justify-center">
      <router-link to="/movies" class="flex basis-full">
        <button class="rounded-xl bg-yellow-400 px-6 py-2 text-xl basis-full">
          Confirmar
        </button>
      </router-link>
    </div>

  </div>


</template>

<script setup>
import DropdownGroup from '../components/dropdown/DropdownGroup.vue';
import Nav from '../components/Nav.vue';
</script>
