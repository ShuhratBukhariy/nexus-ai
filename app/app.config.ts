/**
 * Nuxt UI App Configuration
 *
 * Bu fayl Nuxt UI komponentlarining global konfiguratsiyasini belgilaydi.
 *
 * Nima uchun app.config.ts?
 * - Runtime'da o'zgartirilishi mumkin (SSR uchun ideal)
 * - Nuxt UI komponentlari bu fayldan theme ma'lumotlarini oladi
 * - nuxt.config.ts dan farqli - bu client-side konfiguratsiya
 */
export default defineAppConfig({
  ui: {
    /**
     * PRIMARY rang - loyihadagi asosiy aktsent rangi
     * Dizaynda ko'k rang (#3B82F6) ishlatilgan
     * Nuxt UI 'blue' palette bilan mos keladi
     */
    primary: 'blue',

    /**
     * NEUTRAL rang - matn va chegaralar uchun
     * 'zinc' - zamonaviy, biroz issiq kulrang
     * Alternativalar: 'slate' (sovuqroq), 'gray' (neytral)
     */
    neutral: 'zinc',

    /**
     * Komponent konfiguratsiyalari
     * Har bir komponent uchun default variant va o'lchamlarni belgilash
     */
    button: {
      // Default variant - dizayndagi buttonlar solid ko'rinishda
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'lg'
      },
      // Custom variant qo'shish mumkin
      variants: {
        // Dizayndagi "Early bird tickets" buttoni
        cta: {
          base: 'font-semibold',
          rounded: 'rounded-xl'
        }
      }
    },

    card: {
      // Kartalar uchun default sozlamalar
      defaultVariants: {
        variant: 'outline'
      }
    },

    input: {
      defaultVariants: {
        size: 'lg',
        color: 'neutral'
      }
    },

    badge: {
      defaultVariants: {
        variant: 'subtle',
        size: 'md'
      }
    }
  }
})
