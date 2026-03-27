<script setup lang="ts">
/**
 * HERO SECTION KOMPONENTI
 * =======================
 *
 * Landing page'ning eng muhim qismi.
 * Foydalanuvchi diqqatini jalb qilishi kerak.
 *
 * Dizayn elementlari:
 * 1. Sana badge - event qachon bo'lishini ko'rsatadi
 * 2. Katta sarlavha - asosiy xabar
 * 3. Tavsif matni - qo'shimcha ma'lumot
 * 4. CTA button - asosiy action
 * 5. Dekorativ shakl - vizual qiziqarli qiladi
 */

// Event ma'lumotlari - keyinchalik API dan olish mumkin
const eventInfo = {
  dates: 'OCTOBER 15-17, 2025',
  venue: 'Horizon Convention Center, TechCity, Litpolis',
  title: 'NEXT-GEN AI SUMMIT',
  description: 'Explore the cutting-edge innovations shaping the future of artificial intelligence. Join global leaders and visionaries for two days of insights, discussions, and breakthroughs.',
}
</script>

<template>
  <!--
    HERO SECTION LAYOUT
    ===================

    Grid layout ishlatamiz:
    - Mobile: 1 ustun (stack)
    - Desktop: 2 ustun (content | decoration)

    min-h-[calc(100vh-4rem)] - header balandligini hisobga oladi
  -->
  <section class="relative overflow-hidden bg-neutral-950">
    <div class="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">

      <!--
        LEFT COLUMN - Content
        =====================
        flex flex-col justify-center - vertikal markazlash
      -->
      <div class="flex flex-col justify-center">

        <!--
          DATE BADGE
          ==========
          UBadge - Nuxt UI komponenti
          variant="subtle" - yengil fon
          size="lg" - kattaroq o'lcham
        -->
        <UBadge
          variant="subtle"
          size="lg"
          class="mb-6 w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-400"
        >
          {{ eventInfo.dates }}
        </UBadge>

        <!--
          VENUE INFO
          ==========
          Subtle matn - kam ahamiyatli ma'lumot
        -->
        <p class="mb-4 text-sm text-neutral-400">
          {{ eventInfo.venue }}
        </p>

        <!--
          MAIN TITLE
          ==========
          text-5xl -> lg:text-7xl - responsive font size
          font-bold - qalin shrift
          tracking-tight - harflar orasidagi masofa kamroq

          Nima uchun tracking-tight?
          - Katta shriftlarda harflar orasidagi masofa katta ko'rinadi
          - tight qilish professional ko'rinish beradi
        -->
        <h1 class="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {{ eventInfo.title }}
        </h1>

        <!--
          DESCRIPTION
          ===========
          text-lg - o'qish uchun qulay o'lcham
          text-neutral-400 - secondary color
          max-w-xl - juda uzun qatorlarni oldini oladi
          leading-relaxed - qator orasidagi masofa (line-height)
        -->
        <p class="mb-8 max-w-xl text-lg leading-relaxed text-neutral-400">
          {{ eventInfo.description }}
        </p>

        <!--
          CTA BUTTON
          ==========
          Asosiy call-to-action
          size="xl" - katta button
          trailing-icon - o'ng tomonda arrow

          Nima uchun trailing icon?
          - Foydalanuvchiga "keyingi qadam" hissini beradi
          - Click qilishga undaydi
        -->
        <div class="flex flex-wrap gap-4">
          <UButton
            to="#register"
            size="xl"
            class="rounded-xl px-8"
            trailing-icon="i-heroicons-arrow-right-20-solid"
          >
            Early bird tickets
          </UButton>

          <!--
            Secondary CTA - kam ahamiyatli action
            variant="ghost" - fonsiz
          -->
          <UButton
            to="#agenda"
            size="xl"
            variant="ghost"
            color="neutral"
            class="rounded-xl px-8"
          >
            View schedule
          </UButton>
        </div>
      </div>

      <!--
        RIGHT COLUMN - Decorative Element
        ==================================
        Ko'k 3D shakl - vizual qiziqarli qiladi

        hidden lg:flex - faqat katta ekranlarda ko'rinadi
        items-center justify-center - markazda
      -->
      <div class="hidden items-center justify-center lg:flex">
        <!--
          DECORATIVE SHAPE
          ================
          Bu yerda oddiy CSS shape ishlatamiz.
          Real loyihada 3D model yoki SVG bo'lishi mumkin.

          aspect-square - 1:1 nisbat
          rounded-3xl - katta radius
          rotate-12 - biroz burchak ostida
        -->
        <div class="relative">
          <!-- Asosiy shakl -->
          <div
            class="aspect-square w-80 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl shadow-blue-500/25"
            style="transform: perspective(1000px) rotateY(-15deg) rotateX(10deg);"
          />

          <!-- Ikkinchi shakl - depth uchun -->
          <div
            class="absolute -right-8 -top-8 aspect-square w-64 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-500 opacity-80"
            style="transform: perspective(1000px) rotateY(-15deg) rotateX(10deg);"
          />

          <!-- Uchinchi shakl -->
          <div
            class="absolute -bottom-4 -left-4 aspect-square w-48 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 opacity-60"
            style="transform: perspective(1000px) rotateY(-15deg) rotateX(10deg);"
          />
        </div>
      </div>
    </div>

    <!--
      BACKGROUND GRADIENT
      ===================
      Subtle glow effect orqa fonda
      pointer-events-none - click o'tmaydi
    -->
    <div
      class="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-500/5 to-transparent"
      aria-hidden="true"
    />
  </section>
</template>
