<template>
  <article class="w-[90%] md:w-auto felx flex-col rounded-md shadow mt-5 md:mx-3 border-t-[5px] border-blue-400 md:max-w-[18rem]">
        <div class="w-full bg-white flex justify-center items-center">
          <div class="rounded-md w-full h-[12rem] md:h-[10rem] mt-2 max-w-[95%] bg-gray-300 flex justify-center items-center flex-col shadow" v-if="!image">
            <h1 class="text-blue-400 text-2xl font-bold">404</h1>
            <p class="text-gray-400 mt-2">This project has no thumbnail.</p>
          </div>
          <img v-else :src="image" :alt="title" class="rounded-md w-full max-h-[13rem] mt-2 max-w-[95%] shadow">
          
        </div>
        <hr class="h-0 mt-3 mx-3 border border-gray-200 rounded-full">
        <div class="w-full py-4">
          <a :href="url" class="text-blue-400 font-bold text-xl transition-all duration-300 hover:underline mx-5">{{ title }}</a>
          <p class="text-gray-500 font-mediumy-2 mx-5">{{ description }}</p>
        </div>
      </article>
</template>
<script setup>
  defineProps({
    title: String, 
    description: String, 
    image: String, 
    url: String
  })
</script>