import i18n from './i18n';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-icon'],
  i18n: {
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: i18n,
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }
});
