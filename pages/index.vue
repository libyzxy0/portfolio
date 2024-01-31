<script setup>
  useSeoMeta({
    title: "Jan Liby Dela Costa | libyzxy0", 
    description: "A 15-year-old Full-Stack Web Developer.", 
    ogTitle: "Jan Liby Dela Costa: Discover interesting things about me.",
    ogDescription: "",
    ogImage: "/me.png", 
    ogImageAlt: "Jan Liby Dela Costa: Discover interesting things about me."
  })


const isHero = ref(true);

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        if (entry.target.id !== 'overview') {
          isHero.value = false;
        } else if (entry.target.id === 'overview') {
          isHero.value = true;
        }
      }
    });
  }, { threshold: 0.5 });
  observer.observe(document.querySelector('#overview'));
  observer.observe(document.querySelector('#about'));
  observer.observe(document.querySelector('#projects'));
  observer.observe(document.querySelector('#contact'));
});

  
</script>
<template>
  <div>
    <Navbar :isHero="isHero" />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>