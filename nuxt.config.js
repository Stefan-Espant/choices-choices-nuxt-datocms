export default defineNuxtConfig({
    server: {
      https: false, // Schakel HTTPS uit
    },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'W1vLyxT5rQ15jBpANjnv0gtt',
        apiOptions: {
          region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ]
})
