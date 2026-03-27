<script setup lang="ts">
/**
 * LANDING HEADER KOMPONENTI
 * =========================
 *
 * Senior yondashuv:
 * 1. TypeScript - tip xavfsizligi
 * 2. Semantic HTML - <nav>, <header>
 * 3. Accessibility - aria-labels, keyboard navigation
 * 4. Responsive - mobile menu
 */

// Navigation links - alohida array qilib saqlash yaxshi amaliyot
// Keyinchalik CMS dan ham olish mumkin
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Schedule', to: '#agenda' },
  { label: 'Speakers', to: '#speakers' },
  { label: 'Tickets', to: '#register' },
  { label: 'Venue', to: '#contact' },
  { label: 'Sponsors', to: '#partners' },
]

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Route - active link aniqlash uchun
const route = useRoute()

// Active link tekshirish
const isActiveLink = (to: string) => {
  if (to === '/') return route.path === '/'
  return route.fullPath.includes(to)
}
</script>

<template>
  <!--
    HEADER TUZILMASI
    ================
    - Sticky header - scroll qilganda ham ko'rinadi
    - Backdrop blur - zamonaviy glass effect
    - Z-index yuqori - boshqa elementlar ustida
  -->
  <header
    class="sticky top-0 z-50 w-full border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl"
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

      <!--
        LOGO
        ====
        NuxtLink - Nuxt's router component
        Accessibility: logo text o'rniga aria-label
      -->
      <NuxtLink
        to="/"
        class="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
        aria-label="Nexus - Bosh sahifa"
      >
        nexus
      </NuxtLink>

      <!--
        DESKTOP NAVIGATION
        ==================
        hidden md:flex - mobilda yashirin, md dan ko'rinadi

        Nima uchun <nav>?
        - Semantic HTML - screen readers tushunadi
        - SEO uchun yaxshi
      -->
      <nav class="hidden items-center gap-1 md:flex" aria-label="Asosiy navigatsiya">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-4 py-2 text-sm font-medium transition-colors"
          :class="[
            isActiveLink(link.to)
              ? 'bg-white/10 text-white'
              : 'text-neutral-400 hover:bg-white/5 hover:text-white'
          ]"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!--
        MOBILE MENU BUTTON
        ==================
        md:hidden - faqat mobilda ko'rinadi

        UButton - Nuxt UI komponenti
        - variant="ghost" - fonsiz
        - icon - faqat icon ko'rsatadi
      -->
      <UButton
        class="md:hidden"
        variant="ghost"
        color="neutral"
        :icon="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
        aria-label="Menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      />
    </div>

    <!--
      MOBILE MENU DROPDOWN
      ====================
      v-show - DOM da qoladi, faqat display o'zgaradi (tezroq)
      v-if - DOM dan olib tashlanadi (memory tejaydi)

      Bu yerda v-show ishlatdim chunki menu tez-tez ochiladi/yopiladi
    -->
    <div
      v-show="isMobileMenuOpen"
      class="border-t border-white/5 bg-neutral-950 md:hidden"
    >
      <nav class="flex flex-col p-4" aria-label="Mobil navigatsiya">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-4 py-3 text-sm font-medium transition-colors"
          :class="[
            isActiveLink(link.to)
              ? 'bg-white/10 text-white'
              : 'text-neutral-400 hover:bg-white/5 hover:text-white'
          ]"
          @click="isMobileMenuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
