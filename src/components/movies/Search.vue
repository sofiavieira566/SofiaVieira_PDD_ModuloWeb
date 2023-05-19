<template>

  <div class="relative mt-2 rounded-md shadow-sm">
    <input type="text" name="search" id="search"
           class="block w-full rounded-md py-1.5 px-4 text-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-transparent border border-gray-500"
           placeholder="Procurar filme..."
           @input="$emit('updatesearch', $event.target.value)"
    />
  </div>

</template>
