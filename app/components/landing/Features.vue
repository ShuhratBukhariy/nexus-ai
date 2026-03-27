<script setup lang="ts">
/**
 * FEATURES CARDS KOMPONENTI
 * =========================
 *
 * 3 ta feature card - event'ning asosiy jihatlarini ko'rsatadi.
 *
 * Dizayn xususiyatlari:
 * 1. Speakers card - ko'k gradient fon, avatar'lar
 * 2. Technologies card - oddiy qora fon
 * 3. Networking card - oddiy qora fon
 *
 * Grid layout: 2 ustunli, Speakers katta
 */

// Feature cards data
const features = [
  {
    id: 'speakers',
    title: 'Speakers',
    description: 'Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.',
    variant: 'primary', // Ko'k fon
    hasAvatars: true,
    link: { label: 'And more', to: '#speakers' },
  },
  {
    id: 'technologies',
    title: 'Technologies',
    description: 'Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.',
    variant: 'default',
    icon: 'i-heroicons-cpu-chip',
  },
  {
    id: 'networking',
    title: 'Networking Opportunities',
    description: 'Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.',
    variant: 'default',
    icon: 'i-heroicons-users',
  },
]

// Avatar placeholders - real loyihada real rasmlar bo'ladi
const avatars = [
  { name: 'Speaker 1', color: 'bg-blue-400' },
  { name: 'Speaker 2', color: 'bg-blue-300' },
  { name: 'Speaker 3', color: 'bg-blue-500' },
]
</script>

<template>
  <!--
    FEATURES SECTION
    ================

    Grid layout:
    - Mobile: 1 ustun
    - Tablet: 2 ustun
    - Desktop: 2 ustun, Speakers kattaroq (row-span-2)
  -->
  <section class="bg-neutral-950 py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!--
        CARDS GRID
        ==========
        grid-cols-1 md:grid-cols-2 - responsive
        gap-6 - kartalar orasidagi masofa

        Speakers card: md:row-span-2 - 2 qator egallaydi
      -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">

        <!--
          SPEAKERS CARD (Primary - Ko'k gradient)
          ========================================
          md:row-span-2 - 2 qator egallaydi (kattaroq)
        -->
        <div
          class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:row-span-2"
        >
          <!--
            ICON
            ====
            Yuqori chap burchakda katta icon
          -->
          <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
            <UIcon
              name="i-heroicons-microphone"
              class="h-6 w-6 text-white"
            />
          </div>

          <!-- Title -->
          <h3 class="mb-4 text-2xl font-bold text-white">
            Speakers
          </h3>

          <!-- Description -->
          <p class="mb-8 text-blue-100/80">
            Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.
          </p>

          <!--
            AVATARS
            =======
            Stack effect - bir-birining ustiga
            -space-x-3 - o'ngga siljish (overlap)
          -->
          <div class="mb-6 flex -space-x-3">
            <div
              v-for="(avatar, index) in avatars"
              :key="index"
              :class="[
                'flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-600 text-sm font-medium text-white',
                avatar.color
              ]"
            >
              {{ avatar.name.charAt(0) }}
            </div>
          </div>

          <!--
            LINK
            ====
            "And more" link - hover effekt bilan
          -->
          <NuxtLink
            to="#speakers"
            class="inline-flex items-center gap-2 text-sm font-medium text-white transition-all hover:gap-3"
          >
            And more
            <UIcon name="i-heroicons-arrow-right" class="h-4 w-4" />
          </NuxtLink>

          <!--
            HOVER EFFECT
            ============
            Subtle glow on hover
          -->
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-800/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>

        <!--
          TECHNOLOGIES CARD
          =================
        -->
        <div
          class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-8"
        >
          <h3 class="mb-4 text-xl font-bold text-white">
            Technologies
          </h3>

          <p class="text-neutral-400">
            Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.
          </p>

          <!-- Subtle hover effect -->
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>

        <!--
          NETWORKING CARD
          ===============
        -->
        <div
          class="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-8"
        >
          <h3 class="mb-4 text-xl font-bold text-white">
            Networking Opportunities
          </h3>

          <p class="text-neutral-400">
            Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.
          </p>

          <!-- Subtle hover effect -->
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
      </div>
    </div>
  </section>
</template>
