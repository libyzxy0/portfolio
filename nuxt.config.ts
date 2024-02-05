// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false }, 
  modules: [
    "@nuxtjs/google-fonts", 
    "nuxt-icon"
  ], 
  googleFonts: {
    families: {
      Lato: [400],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
