export default defineNuxtConfig({
  buildModules: ['nuxt-vue-meta'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
    },
  },
  head: {
    title: 'Hallo strandeiland',
  },
})