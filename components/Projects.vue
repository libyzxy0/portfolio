<script setup>
  const projects = ref([
    {
      title: "libyzxy0's Portfolio", 
      description: "A simple portfolio website for Jan Liby Dela Costa(libyzxy0).", 
      image: "/Screenshot_20240130_160146.jpg",
      url: "https://libyzxy0.xyz"
    }, 
    {
      title: "TikDown.click", 
      description: "A website where you can download tiktok videos without watermark.", 
      image: "/tikdownthumb.png",
      url: "https://tikdown.click"
    }, 
    {
      title: "Shoti API", 
      description: "API that sends a lot of beautiful, cute, and hot girl tiktok videos.", 
      image: "https://shoti-api.deno.dev/favicon.png",
      url: "https://shoti-api.deno.dev"
    }, 
    {
      title: "NGL Clone", 
      description: "A web application where you can send message anonymously, the idea came from ngl.link.", 
      image: "https://assets-global.website-files.com/62a6e19b906fa55f541799d7/62a6e2da4349165183f83d89_ngl_icon-p-500.png",
      url: "https://github.com/libyzxy0/notgonnalie"
    }, 
    {
      title: "Metry Bot", 
      description: "A simple messenger chatbot built using typescript.", 
      image: "",
      url: "https://github.com/libyzxy0/MetryBot"
    }, 
    {
      title: "Reactjs Calculator", 
      description: "A simple calculator using reactjs, tailwindcss.", 
      image: "",
      url: "https://github.com/libyzxy0/calculator-react"
    }
  ]);
</script>
<template>
  <section id="projects" class="h-auto">
    <header class="mx-5 mt-8 md:mx-10">
      <h1 class="text-blue-400 font-bold text-4xl">Projects</h1>
      <div class="h-0 rounded-full border-2 border-blue-400 mt-2 w-20"></div>
      <p class="text-gray-500 font-medium mt-2">Discover some amazing projects that i built 🚀</p>
    </header>
    <div class="flex flex-col justify-center items-center mt-4 md:flex-row md:flex-wrap md:justify-start md:mx-5">
      <ProjectCard v-for="item in projects" :key="item.key" :title="item.title" :description="item.description" :image="item.image" :url="item.url" />
    </div>
  </section>
</template>