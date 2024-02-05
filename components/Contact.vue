<script setup>
  const name = ref("");
  const subject = ref("");
  const email = ref("");
  const message = ref("");
  const btnState = ref({ txt: '' })
  const data = { name: name.value, subject: subject.value, email: email.value, message: message.value };
  const onSubmit = (e) => {
    e.preventDefault();
    btnState.value.isLoading = true;
    btnState.value.txt = 'Loading';
    setTimeout(() => {
      btnState.value.txt = 'Message Sent';
      btnState.value.isLoading = false;
    }, 3000)
  }
</script>
<template>
  <section id="contact" class="h-auto">
    <header class="mx-5 mt-8 md:mx-10">
      <h1 class="text-blue-400 font-bold text-4xl">Contact</h1>
      <div class="h-0 rounded-full border-2 border-blue-400 mt-2 w-20"></div>
      <p class="text-gray-500 font-medium mt-2">Contact me and let's connect, and collaborate together.</p>
    </header>
    <div class="flex md:flex-row">
      
    <div class="mx-5 md:mx-10 py-4 w-full md:min-w-[40%]">
      <form @submit="onSubmit" class="mt-3 flex flex-col">
        
        <div class="flex flex-col mt-3">
          <label class="text-gray-600">Name</label>
          <input v-model="name" class="mt-2 outline-none border-2 border-gray-300 px-3 py-2 rounded-md text-gray-600" type="text" placeholder="Enter your name.">
        </div>
        <div class="flex flex-col mt-3">
          <label class="text-gray-600">Email</label>
          <input v-model="email" class="mt-2 outline-none border-2 border-gray-300 px-3 py-2 rounded-md text-gray-600" type="email" placeholder="Enter your email.">
        </div>
        <div class="flex flex-col mt-3">
          <label class="text-gray-600">Subject</label>
          <input v-model="subject" class="mt-2 outline-none border-2 border-gray-300 px-3 py-2 rounded-md text-gray-600" type="text" placeholder="Enter subject.">
        </div>
        <div class="flex flex-col mt-3">
          <label class="text-gray-600">Message</label>
          <textarea v-model="message" class="mt-2 outline-none border-2 border-gray-300 px-3 py-2 rounded-md resize-none text-gray-600" rows="4" placeholder="Enter your name."></textarea>
        </div>
        <button type="submit" class="bg-blue-400 py-3 px-4 mt-4 w-40 rounded-md shadow text-white font-medium transition-all duration-300 hover:bg-blue-300">{{ btnState.txt ? btnState.txt : 'Send Message' }}</button>
      </form>
      <h1 class="mt-8 text-blue-400 text-xl font-bold">Social links ✨</h1>
      <div class="h-20 flex flex-row mt-3">
        <a href="https://github.com/libyzxy0" target="_blank" class="h-6 w-6 rounded-full mr-2 transition-all duration-300 fill-gray-600 hover:fill-blue-400">
          <IconsSocialGithub />
        </a>
        <a href="https://www.linkedin.com/libyzxy0" target="_blank" class="h-6 w-6 rounded-full mx-2 transition-all duration-300 fill-gray-600 hover:fill-blue-400">
          <IconsSocialLinkedin />
        </a>
        <a href="https://www.facebook.com/libyzxy0" target="_blank" class="h-6 w-6 rounded-full mx-2 transition-all duration-300 fill-gray-600 hover:fill-blue-400">
          <IconsSocialFacebook />
        </a>
        <a href="https://instagram.com/libyzxy0" target="_blank" class="h-6 w-6 rounded-full mx-2 transition-all duration-300 fill-gray-600 hover:fill-blue-400">
          <IconsSocialInstagram />
        </a>
      
      </div>
    </div>
    <div class="hidden md:inline-flex mx-10">
      <img src="~/assets/images/undraw_contact_us_re_4qqt.svg" alt="Contact Us">
    </div>
    
    </div>
  </section>
</template>