<template>
  <section id="overview" class="relative h-screen bg-gradient-to-b from-[#7950f2] to-[#748ffc] flex md:flex-row md:justify-between">
    
    <div class="pt-44 md:pt-24 mx-8 md:mx-20 flex flex-col">
      <div class="flex flex-col">
      <h2 class="text-white font-medium text-2xl mb-2">Hello, I'am</h2>
      <h1 class="text-4xl bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent font-bold drop-shadow-md">Jan Liby Dela Costa</h1>
      <h2 class="text-blue-300 font-extrabold text-3xl mt-3">A Full-Stack Web Developer</h2>
      </div>
      <div class="flex flex-row mt-8">
        <a href="https://github.com/libyzxy0" target="_blank" class="h-8 w-8 rounded-full mr-2 transition-all duration-300 fill-white hover:fill-blue-400">
          <IconsSocialGithub />
        </a>
        <a href="https://www.linkedin.com/libyzxy0" target="_blank" class="h-8 w-8 rounded-full mx-2 transition-all duration-300 fill-white hover:fill-blue-400">
          <IconsSocialLinkedin />
        </a>
        <a href="https://www.facebook.com/libyzxy0" target="_blank" class="h-8 w-8 rounded-full mx-2 transition-all duration-300 fill-white hover:fill-blue-400">
          <IconsSocialFacebook />
        </a>
        <a href="https://instagram.com/libyzxy0" target="_blank" class="h-8 w-8 rounded-full mx-2 transition-all duration-300 fill-white hover:fill-blue-400">
          <IconsSocialInstagram />
        </a>
      </div>
      <button @click="$router.push('#about')"
      class="text-white font-medium py-2 px-3 w-32 bg-transparent border-2 border-blue-400 rounded-full mt-6 md:z-10 transition-all duration-300 hover:bg-blue-400 hover:text-gray-800 md:py-3 md:px-3 md:w-40 md:text-xl">Learn More</button>
      </div>
      
      <div class="hidden md:inline-flex mt-36 mx-28 z-20">
        <img src="/me.png" alt="Jan Liby Dela Costa" class="h-56 w-56 rounded-full border-4 border-blue-400">
      </div>
      
      
   <div class="overflow-hidden absolute bottom-[-2px]">
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    style="fill: #ffffff; width: 400%; height: 318px; transform: rotate(180deg);"
  >
    <path
    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
    opacity=".25"
  />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5"
    />
    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
  </svg>
</div>
  </section>
</template>