<template>
  <nav class="h-24 flex items-center mx-8 pt-8"
       :class="{'justify-end':!props.backUrl, 'justify-between':props.backUrl}">

    <div v-if="props.backUrl">
      <router-link :to="props.backUrl">
        <ChevronLeftIcon class="h-8 w-8 text-gray-400"/>
      </router-link>
    </div>

    <div class="flex items-center">
      <div v-if="props.wallet">
        <WalletIcon class="h-10 w-10 mr-2 text-gray-400"/>
      </div>

      <router-link to="/">
        <img class="h-16 w-16" src="/cine-place-logo.png" alt="Cine Place"/>
      </router-link>
    </div>

  </nav>
</template>
<script setup>
const props = defineProps(['backUrl', 'wallet']);


import { ChevronLeftIcon } from '@heroicons/vue/24/solid/index.js';
import { WalletIcon } from '@heroicons/vue/24/solid/index.js';
</script>
