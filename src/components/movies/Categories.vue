<template>

  <div class="flex overflow-x-auto pb-4">

    <div v-for="(category, index) in categories" :key="index">
      <button @click="toggleCategory(index)"
              class="mr-2 border px-4 py-1 rounded"
              :class="{'bg-white border-white text-gray-800': category.name === selectedCategory, 'border-gray-200 text-gray-200': category.name !== selectedCategory}">
        {{ category.name }}
      </button>
    </div>

  </div>

</template>
<script setup>
import { reactive, ref } from 'vue';

const categories = reactive([
  {
    name: 'Comédia'
  },
  {
    name: 'Drama'
  },
  {
    name: 'Horror'
  },
  {
    name: 'Ação'
  },
  {
    name: 'Familiar'
  },
  {
    name: 'Romance'
  },
]);

const selectedCategory = ref('');

function toggleCategory(index) {
  categories.forEach((category, i) => {
    if (i === index) {

      if (selectedCategory.value === category.name) {
        selectedCategory.value = '';
        return;
      }

      selectedCategory.value = category.name;
    }
  });
}


</script>
