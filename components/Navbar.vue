<script setup>
  const isMenuActive = ref(false);
  const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
  }
  defineProps({
    isHero: Boolean
  }) 
  const hideNav = () => {
    isMenuActive.value = false;
  }
</script>

<template>
  <nav class="z-30 fixed top-0 flex items-center justify-between flex-row w-full h-14 backdrop-filter backdrop-blur-md bg-opacity-30" :class="isMenuActive ? '' : 'shadow'">
    <h1 class="font-bold text-2xl mx-4 text-blue-400">libyzxy0</h1>
    <ul class="flex justify-center md:justify-between items-center mx-4 hidden md:inline-flex w-auto flex-col md:flex-row" :class="isHero ? 'text-white' : 'text-gray-700'">
      <a href="#overview">
        <li class="md:0 text-xl font-medium transition-all duration-300 hover:text-blue-400 mx-3 hover:underline">Overview</li>
      </a>
      <a href="#about">
        <li class="text-xl font-medium transition-all duration-300 hover:text-blue-400 mx-3 hover:underline">About Me</li>
      </a>
      <a href="#projects">
        <li class="text-xl font-medium transition-all duration-300 hover:text-blue-400 mx-3 hover:underline">Projects</li>
      </a>
      <a href="#contact">
        <li class="text-xl font-medium transition-all duration-300 hover:text-blue-400 mx-3 hover:underline">Contact</li>
      </a>
    </ul>
    <button @click="toggleMenu" class="mx-4 border-none outline-none md:hidden" :class="isHero ? 'text-white' : 'text-gray-800'">
      <IconsBar v-if="!isMenuActive" />
      <IconsClose v-else />
    </button>
  </nav>
  <div class="z-20 fixed shadow-md h-auto w-full transition-all duration-300 backdrop-filter backdrop-blur-md bg-opacity-30" :class="isMenuActive ? 'top-14' : 'top-[-16rem]'">
    <ul class="flex justify-center items-center mx-4 w-auto flex-col py-4" :class="isHero ? 'text-white' : 'text-gray-700'">
      <a @click="hideNav" href="#overview">
        <li class="text-xl font-medium transition-all duration-300 hover:text-blue-400 py-1 hover:underline">Overview</li>
      </a>
      <a @click="hideNav" href="#about">
        <li class="text-xl font-medium transition-all duration-300 hover:text-blue-400 py-1 hover:underline">About Me</li>
      </a>
      <a @click="hideNav" href="#projects">
        <li class="text-xl font-medium transition-all duration-300 hover:text-blue-400 py-1 hover:underline">Projects</li>
      </a>
      <a @click="hideNav" href="#contact">
        <li class="text-xl font-medium transition-all duration-300 hover:text-blue-400 py-1 hover:underline">Contact</li>
      </a>
    </ul>
  </div>
</template>