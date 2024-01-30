<template>
  <section id="about" class="h-auto w-full">
    <header class="mx-5 md:mx-10 mt-8">
      <h1 class="text-blue-400 font-bold text-4xl">About Me</h1>
      <div class="h-0 rounded-full border-2 border-blue-400 mt-2 w-20"></div>
      <p class="text-gray-500 font-medium mt-2">Discover interesting things about me 🌟</p>
    </header>
    <div class="mt-5 mx-5 md:mx-10">
      <img src="/me.png" alt="Jan Liby Dela Costa" class="w-36 h-36 rounded-lg my-4 border-2 border-blue-400 shadow-sm">
      <p class="text-gray-600 font-medium mr-5 text-md md:mr-32">My name is <b class="text-blue-400">Jan Liby Dela Costa</b> and i'am a 15-year-old tech enthusiast, loves diving into the world of <b class="text-blue-400">Full Stack Web Development</b>, especially the <b class="text-blue-400">MEVN Stack</b>, with an infectious enthusiasm for discovering new ideas every day.</p>
      
      <div class="flex flex-col md:flex-row justify-between">
        
      <div class="mt-6 flex flex-col">
        <h1 class="text-blue-400 text-2xl font-bold">Technologies 🚀</h1>
        <Techs />
      </div>
      
      <div class="mt-6 flex flex-col">
      <h1 class="text-blue-400 text-2xl font-bold">Education 📖</h1>
      <div class="my-4">
        <article class="border-l-[3px] py-1 odd:border-blue-400 even:border-gray-300">
          <h1 class="mx-3 text-blue-400 font-bold text-xl">Elementary</h1>
          <p class="mx-3 text-gray-600 text-md font-medium">Studied Grade 1 to 6 at <a href="#" target="_blank" class="font-bold text-blue-400">Balighot Elementary School</a>.</p>
        </article>
        <article class="border-l-[3px] py-1 odd:border-blue-400 even:border-gray-300">
          <h1 class="mx-3 text-blue-400 font-bold text-xl">High School</h1>
          <p class="mx-3 text-gray-600 text-md font-medium">Studied Grade 8 to 10 at <a href="https://www.facebook.com/StoCristoNationalHighSchool" target="_blank" class="font-bold text-blue-400">Sto. Cristo National High School</a>.</p>
        </article>
        <article class="border-l-[3px] py-1 odd:border-blue-400 even:border-gray-300">
          <h1 class="mx-3 text-blue-400 font-bold text-xl">Web Development</h1>
          <p class="mx-3 text-gray-600 text-md font-medium">Studied Full-Stack Web Development (MEVN Stack) at <a href="https://www.freecodecamp.org" target="_blank" class="font-bold text-blue-400">Freecodecamp</a>.</p>
        </article>
        </div>
       </div>
      </div>
      
    </div>
  </section>
</template>