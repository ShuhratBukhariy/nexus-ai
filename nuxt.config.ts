// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  /**
   * MODULLAR
   * @nuxt/ui - UI komponentlar kutubxonasi
   * @nuxt/fonts - Google Fonts integratsiyasi (optimized)
   */
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts'
  ],

  /**
   * CSS FAYLLAR
   * Tailwind va global stillar
   */
  css: ['~/assets/css/main.css'],

  /**
   * COLOR MODE KONFIGURATSIYASI
   * Dizayn dark theme asosida, shuning uchun dark default qilamiz
   */
  colorMode: {
    preference: 'dark',     // Default: dark
    fallback: 'dark',       // Agar preference aniqlanmasa
    classSuffix: '',        // .dark class (Nuxt UI standart)
    storageKey: 'nuxt-color-mode'
  },

  /**
   * FONTS KONFIGURATSIYASI
   * @nuxt/fonts moduli Google Fonts'ni optimallashtirib yuklaydi
   */
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [300, 400, 500, 600, 700, 800, 900]
      }
    ],
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal']
    }
  },

  /**
   * APP KONFIGURATSIYASI
   * SEO va meta taglar
   */
  app: {
    head: {
      title: 'Next-Gen AI Summit',
      meta: [
        { name: 'description', content: 'The premier AI conference bringing together global leaders and visionaries' },
        { name: 'theme-color', content: '#0a0a0a' }
      ]
    }
  },

  devtools: { enabled: true },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})
