<script setup lang="ts">
/**
 * AGENDA SECTION KOMPONENTI
 * =========================
 *
 * Event dasturi - kunlar va sessiyalar.
 *
 * Arxitektura:
 * 1. TypeScript interface - ma'lumot tuzilmasi aniq
 * 2. Array based - oson qo'shish/o'chirish
 * 3. Tab navigation - kunlar o'rtasida almashish
 */

// TypeScript interface - tip xavfsizligi
interface AgendaSession {
  time: string
  title: string
  description: string
}

interface AgendaDay {
  day: string
  date: string
  title: string
  sessions: AgendaSession[]
}

// Agenda data
const agenda: AgendaDay[] = [
  {
    day: 'Day 1',
    date: 'October 15, 2025',
    title: 'AI Innovations & Trends',
    sessions: [
      {
        time: '09:00 - 10:00',
        title: 'Opening Keynote',
        description: 'The summit kicks off with a keynote, expert panels, and discussions on AI\'s impact, ethics, and automation.',
      },
      {
        time: '10:30 - 12:00',
        title: 'AI in Enterprise',
        description: 'Hands-on workshops and a networking event wrap up the day.',
      },
      {
        time: '14:00 - 16:00',
        title: 'Workshops & Labs',
        description: 'Interactive sessions on implementing AI solutions.',
      },
      {
        time: '17:00 - 19:00',
        title: 'Networking Event',
        description: 'Connect with industry leaders and fellow attendees.',
      },
    ],
  },
  {
    day: 'Day 2',
    date: 'October 16, 2025',
    title: 'Deep Learning & Applications',
    sessions: [
      {
        time: '09:00 - 10:30',
        title: 'Advanced ML Techniques',
        description: 'Explore cutting-edge machine learning methodologies.',
      },
      {
        time: '11:00 - 12:30',
        title: 'AI in Healthcare',
        description: 'Real-world applications of AI in medical diagnostics.',
      },
      {
        time: '14:00 - 16:00',
        title: 'NLP Workshop',
        description: 'Hands-on natural language processing techniques.',
      },
    ],
  },
  {
    day: 'Day 3',
    date: 'October 17, 2025',
    title: 'Future of AI & Networking',
    sessions: [
      {
        time: '09:30 - 11:00',
        title: 'AI Ethics Panel',
        description: 'Discuss AI\'s long-term impact, attend expert-led workshops.',
      },
      {
        time: '11:30 - 13:00',
        title: 'Startup Pitch Competition',
        description: 'Watch the startup pitch competition.',
      },
      {
        time: '14:00 - 16:00',
        title: 'Closing Keynote',
        description: 'The event closes with a visionary keynote and final networking sessions.',
      },
    ],
  },
]

// Active day - ref bilan reactive
const activeDay = ref(0)
</script>

<template>
  <!--
    AGENDA SECTION
    ==============
    id="agenda" - anchor navigation uchun
  -->
  <section id="agenda" class="bg-neutral-950 py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!--
        SECTION HEADER
        ==============
        Katta sarlavha + location info
      -->
      <div class="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AGENDA
          </h2>
        </div>

        <div class="text-neutral-400">
          <p class="text-sm">October 15-17, 2025 | Horizon</p>
          <p class="text-sm">Convention Center, Amsterdam</p>
        </div>
      </div>

      <!--
        DAY TABS
        ========
        Kunlar o'rtasida almashish

        Nima uchun button va click?
        - SPA - sahifa reload bo'lmaydi
        - Tez va smooth o'tish
      -->
      <div class="mb-8 flex flex-wrap gap-4">
        <button
          v-for="(day, index) in agenda"
          :key="day.day"
          class="rounded-xl px-6 py-3 text-sm font-medium transition-colors"
          :class="[
            activeDay === index
              ? 'bg-white text-neutral-900'
              : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
          ]"
          @click="activeDay = index"
        >
          {{ day.day }}
        </button>
      </div>

      <!--
        ACTIVE DAY CONTENT
        ==================
        Grid: chap - kun info, o'ng - sessiyalar
      -->
      <div class="grid gap-8 lg:grid-cols-3">

        <!--
          DAY INFO (Chap ustun)
          =====================
          lg:col-span-1 - 1/3 kenglik
        -->
        <div class="rounded-3xl border border-white/10 bg-neutral-900 p-8 lg:col-span-1">
          <p class="mb-2 text-sm text-neutral-500">
            {{ agenda[activeDay].day }}
          </p>
          <p class="mb-4 text-lg font-medium text-white">
            {{ agenda[activeDay].date }}
          </p>
          <h3 class="text-xl font-bold text-white">
            {{ agenda[activeDay].title }}
          </h3>
        </div>

        <!--
          SESSIONS LIST (O'ng ustun)
          ===========================
          lg:col-span-2 - 2/3 kenglik
        -->
        <div class="space-y-4 lg:col-span-2">
          <div
            v-for="session in agenda[activeDay].sessions"
            :key="session.time"
            class="group rounded-2xl border border-white/10 bg-neutral-900/50 p-6 transition-colors hover:bg-neutral-900"
          >
            <!--
              SESSION TIME
              ============
              Badge ko'rinishida
            -->
            <div class="mb-3 inline-block rounded-lg bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
              {{ session.time }}
            </div>

            <!-- Session title -->
            <h4 class="mb-2 text-lg font-semibold text-white">
              {{ session.title }}
            </h4>

            <!-- Session description -->
            <p class="text-sm text-neutral-400">
              {{ session.description }}
            </p>
          </div>
        </div>
      </div>

      <!--
        VIEW SCHEDULE LINK
        ==================
      -->
      <div class="mt-12 text-center">
        <UButton
          variant="outline"
          color="neutral"
          size="lg"
          class="rounded-xl"
          trailing-icon="i-heroicons-arrow-right"
        >
          View detailed schedule
        </UButton>
      </div>
    </div>
  </section>
</template>
