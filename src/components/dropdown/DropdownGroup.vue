<template>
  <div class="max-w-xs mx-auto">
    <div v-for="(location, index) in locations" :key="index">
      <button
        class="w-full flex justify-between items-center py-4 px-6 bg-gray-200 mb-2 rounded-2xl focus:outline-none"
        @click="toggleLocation(index)"
      >
        <span class="text-xl">{{ location.name }}</span>
        <svg
          :class="{'transform rotate-180': location.isOpen}"
          class="w-5 h-5 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

        <div v-if="location.isOpen" class="px-6 py-4">
          <div v-for="(option, optionIndex) in location.options" :key="optionIndex">
            <label class="flex items-center mb-2">
              <input
                type="radio"
                class="form-radio"
                :value="option"
                v-model="selectedOption"
              >
              <span class="ml-2 text-white underline">{{ option }}</span>
            </label>
          </div>
        </div>

    </div>
  </div>
</template>
<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const locations = reactive([
      {
        name: 'Norte',
        isOpen: false,
        options: [
          'C.C Mira Maia | Maia',
          'Estação Viana Shopping | V. do Castelo',
          'La  Vie | Guarda',
          'Nova Arcada | Braga',
          '8ª Avenida | S. João da Madeira',
        ],
      },
      {
        name: 'Centro',
        isOpen: false,
        options: [
          'Serra Shopping | Covilhã',
          'Leiria Shopping | Leiria',
          'La  Vie | Caldas da Rainha',
          'Loures Shopping | Loures',
        ],
      },
      {
        name: 'Sul',
        isOpen: false,
        options: [
          'Algarve Shopping | Albufeira',
          'C. C. de Portimão | Portimão',
          'Rio Sul Shopping | Seixal',
        ],
      },
      {
        name: 'Açores',
        isOpen: false,
        options: ['Parque Atlântico | Ponta Delgada'],
      },
      {
        name: 'Madeira',
        isOpen: false,
        options: ['Madeira Shopping | Funchal'],
      },
    ]);

    const selectedOption = ref(null);

    function toggleLocation(index) {
      locations.forEach((location, i) => {
        if (i === index) {
          location.isOpen = !location.isOpen;
        } else {
          location.isOpen = false;
        }
      });

      if (!locations[index].isOpen) {
        selectedOption.value
          = null;
      }
    }

    return {
      locations,
      selectedOption,
      toggleLocation,
    };
  },
};
</script>
