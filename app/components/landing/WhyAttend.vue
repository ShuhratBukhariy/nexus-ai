<script setup lang="ts">
/**
 * WHY ATTEND SECTION
 * ==================
 *
 * Event'ga kelish sabablari.
 * 4 ta katta raqamli karta.
 *
 * Dizayn xususiyatlari:
 * 1. Katta raqamlar (01, 02, 03, 04)
 * 2. Grid layout 2x2
 * 3. Border va hover effect
 */

// Reasons data
const reasons = [
  {
    number: '01',
    title: 'CUTTING-EDGE INSIGHTS',
    description: 'Gain firsthand knowledge from the AI leaders and pioneers shaping the industry.',
  },
  {
    number: '02',
    title: 'HANDS-ON LEARNING',
    description: 'Participate in interactive workshops, live demos, and deep-dive sessions to sharpen your skills.',
  },
  {
    number: '03',
    title: 'EXCLUSIVE NETWORKING',
    description: 'Connect with AI leaders, investors, startups, and fellow professionals at curated networking events.',
  },
  {
    number: '04',
    title: 'INNOVATION SHOWCASE',
    description: 'Explore groundbreaking AI solutions from emerging startups and established tech giants redefining the future.',
  },
]
</script>

<template>
  <!--
    WHY ATTEND SECTION
    ==================
  -->
  <section class="bg-neutral-950 py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!--
        SECTION HEADER
        ==============
      -->
      <div class="mb-12 lg:mb-16">
        <h2 class="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          WHY ATTEND?
        </h2>
        <p class="max-w-2xl text-lg text-neutral-400">
          Discover why Next-Gen AI Summit is the must-attend event for AI professionals, innovators, and industry leaders.
        </p>
      </div>

      <!--
        REASONS GRID
        ============
        2x2 grid
      -->
      <div class="grid gap-6 sm:grid-cols-2">
        <div
          v-for="reason in reasons"
          :key="reason.number"
          class="group rounded-3xl border border-white/10 bg-neutral-900/50 p-8 transition-colors hover:border-white/20 hover:bg-neutral-900"
        >
          <!--
            REASON NUMBER
            =============
            Katta, xira raqam
            text-7xl - juda katta
            text-neutral-800 - xira (background effect)
          -->
          <div class="mb-4 text-7xl font-bold text-neutral-800">
            {{ reason.number }}
          </div>

          <!--
            REASON TITLE
            ============
            uppercase - katta harflar
            tracking-wide - harflar orasida kenglik
          -->
          <h3 class="mb-3 text-lg font-bold uppercase tracking-wide text-white">
            {{ reason.title }}
          </h3>

          <!--
            REASON DESCRIPTION
            ==================
          -->
          <p class="text-neutral-400">
            {{ reason.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
