<script setup lang="ts">
/**
 * LANDING PAGE - INDEX.VUE
 * ========================
 *
 * Bu asosiy landing sahifa. Barcha seksiyalar shu yerda jamlanadi.
 *
 * Arxitektura qarorlari:
 * 1. Har bir seksiya alohida komponent - maintainability
 * 2. Lazy loading - LandingAgenda -> lazy import
 * 3. SEO meta tags - useSeoMeta()
 */

// SEO Meta tags
useSeoMeta({
  title: 'Next-Gen AI Summit 2025 | The Premier AI Conference',
  description: 'Join global leaders and visionaries for two days of insights, discussions, and breakthroughs in artificial intelligence.',
  ogTitle: 'Next-Gen AI Summit 2025',
  ogDescription: 'Explore cutting-edge innovations shaping the future of AI',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <!--
    LANDING PAGE STRUCTURE
    ======================
    Har bir seksiya o'z komponenti ichida.
    ID'lar anchor navigation uchun (#speakers, #agenda, etc.)
  -->
  <div>
    <!-- Hero Section - Asosiy e'tibor tortuvchi qism -->
    <LandingHero />

    <!-- Partners/Sponsors logos -->
    <LandingPartners />

    <!-- Feature Cards -->
    <LandingFeatures />

    <!-- Agenda -->
    <LandingAgenda />

    <!-- Keynote Speakers -->
    <LandingKeynoteSpeakers />

    <!-- Why Attend -->
    <LandingWhyAttend />

    <!-- Register + Countdown -->
    <LandingRegister />

    <!-- Contact + Map -->
    <LandingContact />

    <!-- Footer -->
    <LandingFooter />
  </div>
</template>
