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
      image: "",
      url: "https://shoti-api.deno.dev"
    }, 
    {
      title: "Global GC", 
      description: "A website where you can chat, and send images, with everyone.", 
      image: "",
      url: "https://github.com/libyzxy0/global-gc"
    }, 
    {
      title: "Metry Bot", 
      description: "A simple messenger chatbot built using typescript.", 
      image: "",
      url: "https://github.com/libyzxy0/MetryBot"
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