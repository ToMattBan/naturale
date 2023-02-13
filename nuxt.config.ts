// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/variables.css',
    '@/assets/css/global.css',
    '@fontsource/inter',
  ],
  app: {
    head: {
      titleTemplate: '%sNaturale',
    },
  },
});
