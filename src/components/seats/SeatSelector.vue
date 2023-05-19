<template>
  <div class="px-2">

    <div class="flex flex-row justify-between max-w-xs mx-auto">

      <h4 class="text-white">Selecionar lugares</h4>

      <div class="mt-4 mb-4">
        <button @click="toggleZoom">
          <MagnifyingGlassPlusIcon class="h-8 w-8 text-gray-400"/>
        </button>
      </div>

    </div>


    <div class="max-w-xs mx-auto overflow-auto flex flex-wrap">

      <div class="flex">
        <div class="w-6"></div>
        <div
          v-for="(column, columnIndex) in 24"
          :key="columnIndex"
          class="mx-1 mb-2 text-white"
          :class="{ 'w-6 h-8' : zoomed , 'w-3 h-4 text-xs' : !zoomed}"
        >
          {{ column }}
        </div>
      </div>

      <div v-for="(row, rowIndex) in 10" :key="rowIndex" class="flex">

        <div class="flex text-white justify-center items-center"
             :class="{ 'w-6 h-8' : zoomed , 'w-6 h-4 text-xs' : !zoomed}">
          {{ String.fromCharCode(74 - rowIndex) }}
        </div>

        <div
          v-for="(column, columnIndex) in 24"
          :key="columnIndex"
          :class="getSeatClass(rowIndex, columnIndex)"
          @click="toggleSeat(rowIndex, columnIndex)"
        >
        </div>
      </div>

    </div>

    <div class="bg-gray-300 rounded h-3 w-full mt-2 mb-4"></div>

  </div>
</template>

<script>
import { ref } from 'vue';
import { MagnifyingGlassPlusIcon } from '@heroicons/vue/24/solid/index.js';

export default {
  components: {
    MagnifyingGlassPlusIcon,
  },
  setup() {
    const selectedSeats = ref([]);
    const walkway = [
      {
        row: 1,
        column: [4, 5, 18, 19],
      },
      {
        row: 2,
        column: [4, 5, 18, 19],
      },
      {
        row: 3,
        column: [4, 5, 18, 19],
      },
      {
        row: 4,
        column: [4, 5, 18, 19],
      },
      {
        row: 5,
        column: [4, 5, 18, 19],
      },
      {
        row: 6,
        column: [4, 5, 18, 19],
      },
      {
        row: 7,
        column: [4, 5, 18, 19],
      },
      {
        row: 8,
        column: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      },
      {
        row: 9,
        column: [0, 1, 2, 3, 4, 5, 18, 19, 20, 21, 22, 23],
      }
    ];
    const takenSeats = [
      {
        row: 3,
        column: 7,
      },
      {
        row: 3,
        column: 8,
      },
      {
        row: 5,
        column: 12,
      },
      {
        row: 5,
        column: 13,
      },
      {
        row: 5,
        column: 14,
      },
      {
        row: 5,
        column: 15,
      },
    ];

    const longSeats = [
      {
        row: 9,
        column: 6,
      },
      {
        row: 9,
        column: 7,
      },
      {
        row: 9,
        column: 16,
      },
      {
        row: 9,
        column: 17,
      },
    ];

    const connectedSeatsLeft = [
      {
        row: 9,
        column: 8,
      },
      {
        row: 9,
        column: 10,
      },
      {
        row: 9,
        column: 12,
      },
      {
        row: 9,
        column: 14,
      },
    ];

    const connectedSeatsRight = [
      {
        row: 9,
        column: 9,
      },
      {
        row: 9,
        column: 11,
      },
      {
        row: 9,
        column: 13,
      },
      {
        row: 9,
        column: 15,
      },
    ];

    const zoomed = ref(false);

    const toggleSeat = (row, column) => {

      if (isWalkway(row, column)) {
        return;
      }

      if (isTaken(row, column)) {
        return;
      }

      if (selectedSeats.value.includes(`${row}-${column}`)) {
        selectedSeats.value = selectedSeats.value.filter((s) => s !== `${row}-${column}`);
      } else {
        selectedSeats.value.push(`${row}-${column}`);
      }
    };

    const getSeatClass = (row, column) => {

      let classes = '';
      if (zoomed.value) {
        // zoomed
        if (isLong(row, column)) {
          classes += 'w-6 h-16 ';
        } else {
          classes += 'w-6 h-8 ';
        }
      } else {
        // not zoomed
        if (isLong(row, column)) {
          classes += 'w-3 h-12 ';
        } else {
          classes += 'w-3 h-6 ';
        }
      }

      if (selectedSeats.value.includes(`${row}-${column}`)) {

        if (isConnectedLeft(row, column)) {
          classes += 'ml-2 mb-2 rounded-l bg-yellow-300 cursor-pointer ';
        }else if (isConnectedRight(row, column)) {
          classes += 'mr-2 mb-2 rounded-r bg-yellow-300 cursor-pointer ';
        } else {
          classes += 'mx-1 mb-2 rounded bg-yellow-300 cursor-pointer ';
        }
        return classes;
      } else if (isTaken(row, column)) {
        classes += 'mx-1 mb-2 rounded bg-red-600 cursor-not-allowed ';
        return classes;
      } else if (isWalkway(row, column)) {
        classes += 'mx-1 mb-2 ';
        return classes;
      } else {

        if (isConnectedLeft(row, column)) {
          classes += 'ml-2 mb-2 rounded-l bg-gray-300 cursor-pointer ';
        }else if (isConnectedRight(row, column)) {
          classes += 'mr-2 mb-2 rounded-r bg-gray-300 cursor-pointer ';
        } else {
          classes += 'mx-1 mb-2 rounded bg-gray-300 cursor-pointer ';
        }

      }

      return classes;
    };

    const isWalkway = (row, column) => {
      let isWalkway = false;
      walkway.forEach((walkway) => {
        if (walkway.row === row && walkway.column.includes(column)) {
          isWalkway = true;
        }
      });

      return isWalkway;

    };

    const isLong = (row, column) => {
      return !!longSeats.find((seat) => seat.row === row && seat.column === column);
    };

    const isConnectedLeft = (row, column) => {
      return !!connectedSeatsLeft.find((seat) => seat.row === row && seat.column === column);
    };

    const isConnectedRight = (row, column) => {
      return !!connectedSeatsRight.find((seat) => seat.row === row && seat.column === column);
    };

    const isTaken = (row, column) => {
      return !!takenSeats.find((seat) => seat.row === row && seat.column === column);
    };

    const toggleZoom = () => {
      zoomed.value = !zoomed.value;
    };

    return {
      selectedSeats,
      walkway,
      takenSeats,
      zoomed,
      toggleSeat,
      getSeatClass,
      isTaken,
      toggleZoom,
    };
  },
};
</script>
