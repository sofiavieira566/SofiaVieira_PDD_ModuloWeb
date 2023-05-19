<template>
  <Nav back-url="/movies" wallet="true"/>

  <div class="min-h-[calc(100vh-6rem)]">

    <h2 class="contained text-gray-200 text-2xl pt-8">
      Doutor Estranho
    </h2>

    <h3 class="contained text-gray-200 pb-4">
      no Multiverso da Loucura
    </h3>

    <SeatSelector/>

    <div class="flex text-white mb-4">
      <div class="flex items-center mr-3">
        <div class="rounded-full bg-yellow-300 w-3 h-3 mx-2"></div>
        Selecionado
      </div>
      <div class="flex items-center mr-3">
        <div class="rounded-full bg-red-600 w-3 h-3 mx-2"></div>
        Ocupado
      </div>
      <div class="flex items-center mr-3">
        <div class="rounded-full bg-gray-300 w-3 h-3 mx-2"></div>
        Livre
      </div>
    </div>

    <div class="flex justify-end px-6 mb-5">
      <button class="rounded-xl bg-yellow-400 px-6 py-2 text-xl">
        Continuar
      </button>
    </div>

  </div>
</template>

<script setup>
import Nav from '../components/Nav.vue';
import SeatSelector from '../components/seats/SeatSelector.vue';
</script>
