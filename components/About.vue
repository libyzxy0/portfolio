<template>
  <section id="about" class="h-auto w-full">
    <header class="mx-5 md:mx-10 mt-8">
      <h1 class="text-blue-400 font-bold text-4xl">About Me</h1>
      <div class="h-0 rounded-full border-2 border-blue-400 mt-2 w-20"></div>
      <p class="text-gray-500 font-medium mt-2">Discover interesting things about me 🌟</p>
    </header>
    <div class="mt-5 mx-5 md:mx-10">
      <div class="flex flex-col md:flex-row md:flex-wrap">
        <div class="flex flex-col md:max-w-[50%]">
      <img style="border-radius: 30% 70% 41% 59% / 56% 23% 77% 44%;" src="~/assets/images/me.png" alt="Jan Liby Dela Costa" class="w-72 h-auto my-4 border-2 border-blue-400 shadow-sm">
      <p class="text-gray-600 font-medium mr-5 text-md">My name is <b class="text-blue-400">Jan Liby Dela Costa</b> and i'am a 15-year-old tech enthusiast, loves diving into the world of <b class="text-blue-400">Full Stack Web Development</b>, especially the <b class="text-blue-400">MEVN Stack</b>, with an infectious enthusiasm for discovering new ideas every day.</p>
      <button @click="$router.push('/story')" class="py-3 px-4 bg-blue-400 my-5 rounded-full shadow font-medium text-white w-[50%] transition-all duration-300 hover:bg-blue-500">Read My Story</button>
      </div>
      <div class="mt-4">
        <h1 class="text-blue-400 text-2xl font-bold">Tech Stacks 🚀</h1>
        <div class="flex flex-row flex-wrap justify-between my-4">
          <Icon name="logos:javascript" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="logos:typescript-icon" class="w-24 h-auto mt-5 md:w-20 md:mr-3" />
          <Icon name="logos:html-5" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="logos:css-3" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="logos:vue" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="logos:react" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="logos:nuxt-icon" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="logos:nodejs-icon" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="logos:mongodb" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="logos:firebase" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="logos:express" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="vscode-icons:file-type-tailwind" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="logos:bootstrap" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="devicon:git" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          <Icon name="logos:github" class="w-24 h-auto mt-5 md:w-20 md:mx-3" />
          
        </div>
      </div>
      </div>
      
      <div class="flex flex-col md:flex-row justify-between md:flex-wrap">
      
      <div class="mt-6">
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
        </div>
       </div>
        <div class="my-4 md:max-w-[50%]">
        <h1 class="text-blue-400 text-2xl font-bold mb-4">Experience 💫</h1>
        <article class="border-l-[3px] py-1 odd:border-blue-400 even:border-gray-300">
          <h1 class="mx-3 text-blue-400 font-bold text-xl">Web Developer</h1>
          <p class="mx-3 text-gray-600 text-md font-medium">Experienced web developer with over 2 years of expertise in crafting dynamic and user-friendly websites.</p>
        </article>
        <article class="border-l-[3px] py-1 odd:border-blue-400 even:border-gray-300">
          <h1 class="mx-3 text-blue-400 font-bold text-xl">Chatbot Development</h1>
          <p class="mx-3 text-gray-600 text-md font-medium">Skilled in chatbot development, with a focus on creating interactive and efficient conversational experiences.</p>
        </article>
        <article class="border-l-[3px] py-1 odd:border-blue-400 even:border-gray-300">
          <h1 class="mx-3 text-blue-400 font-bold text-xl">Rest API's</h1>
          <p class="mx-3 text-gray-600 text-md font-medium">With over 2 years of REST API development expertise.</p>
        </article>
        </div>
      </div>
      
    </div>
  </section>
</template>