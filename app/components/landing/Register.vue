<script setup lang="ts">
/**
 * REGISTER + COUNTDOWN SECTION
 * ============================
 *
 * Bu komponentda:
 * 1. Countdown timer - real vaqtda
 * 2. Testimonials - fikrlar
 * 3. Register CTA
 *
 * Senior texnikalar:
 * 1. useInterval - Vue composable
 * 2. computed - reaktiv hisoblash
 * 3. onUnmounted - memory leak oldini olish
 */

// Countdown target date
const targetDate = new Date('2025-10-15T09:00:00')

// Countdown state
const now = ref(new Date())

// Interval ID - cleanup uchun saqlash
let intervalId: ReturnType<typeof setInterval> | null = null

// Component mount bo'lganda interval boshlash
onMounted(() => {
  intervalId = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

// Component unmount bo'lganda interval to'xtatish
// BU JUDA MUHIM - memory leak oldini oladi
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

// Countdown computed values
const countdown = computed(() => {
  const diff = targetDate.getTime() - now.value.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
})

// Format number with leading zero
const formatNumber = (num: number): string => {
  return num.toString().padStart(2, '0')
}

// Testimonials data
const testimonials = [
  {
    id: '1',
    quote: 'This summit opened my eyes to AI\'s real impact on industry. It will shape my company\'s strategy.',
    author: 'Mark Anderson',
    title: 'CTO, NeuraTech',
    label: 'GAME-CHANGING INSIGHTS',
  },
  {
    id: '2',
    quote: 'Incredible speakers, top-tier networking, and cutting-edge discussions all in one place.',
    author: 'Sarah Chen',
    title: 'AI Researcher, DeepMind',
    label: 'THE BEST AI EVENT!',
  },
  {
    id: '3',
    quote: 'From hands-on workshops to visionary talks, this summit is a must-attend for AI professionals.',
    author: 'David Laurent',
    title: 'CEO, FutureLabs',
    label: 'UNMATCHED OPPORTUNITIES',
  },
]
</script>

<template>
  <!--
    REGISTER SECTION
    ================
    id="register" - anchor navigation
  -->
  <section id="register" class="bg-neutral-950 py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!--
        TWO COLUMN LAYOUT
        =================
        Chap: Testimonials
        O'ng: Countdown + Register
      -->
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">

        <!--
          LEFT COLUMN - TESTIMONIALS
          ==========================
        -->
        <div class="space-y-6">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="rounded-3xl border border-white/10 bg-neutral-900/50 p-6"
          >
            <!--
              TESTIMONIAL LABEL
              =================
              Kichik label - kategoriya
            -->
            <div class="mb-4 inline-block rounded-lg bg-neutral-800 px-3 py-1 text-xs font-medium uppercase tracking-wider text-neutral-400">
              {{ testimonial.label }}
            </div>

            <!--
              QUOTE
              =====
            -->
            <p class="mb-6 text-lg text-white">
              "{{ testimonial.quote }}"
            </p>

            <!--
              AUTHOR INFO
              ===========
            -->
            <div class="flex items-center gap-3">
              <!-- Avatar placeholder -->
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 text-sm font-medium text-white">
                {{ testimonial.author.split(' ').map(n => n[0]).join('') }}
              </div>
              <div>
                <p class="font-medium text-white">
                  {{ testimonial.author }}
                </p>
                <p class="text-sm text-neutral-500">
                  {{ testimonial.title }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!--
          RIGHT COLUMN - COUNTDOWN + REGISTER
          ====================================
        -->
        <div>
          <!--
            REGISTER NOW HEADER
            ===================
          -->
          <h2 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            REGISTER NOW
          </h2>

          <p class="mb-8 text-neutral-400">
            Secure your spot at the Next-Gen AI Summit and join the future of AI innovation.
          </p>

          <!--
            COUNTDOWN TIMER
            ===============
            Katta raqamlar - soat, daqiqa, soniya

            font-mono - monospace font (raqamlar bir xil kenglikda)
            tabular-nums - raqamlar bir xil kenglikda
          -->
          <div class="mb-8">
            <p class="mb-4 text-sm uppercase tracking-wider text-neutral-500">
              Early Bird Pricing Ends in:
            </p>

            <div class="flex gap-4">
              <!--
                DAYS
              -->
              <div class="text-center">
                <div class="mb-1 font-mono text-5xl font-bold tabular-nums text-white sm:text-6xl">
                  {{ formatNumber(countdown.days) }}
                </div>
                <div class="text-xs uppercase tracking-wider text-neutral-500">
                  Days
                </div>
              </div>

              <!-- Separator -->
              <div class="pt-3 text-4xl font-bold text-neutral-700">:</div>

              <!--
                HOURS
              -->
              <div class="text-center">
                <div class="mb-1 font-mono text-5xl font-bold tabular-nums text-white sm:text-6xl">
                  {{ formatNumber(countdown.hours) }}
                </div>
                <div class="text-xs uppercase tracking-wider text-neutral-500">
                  Hours
                </div>
              </div>

              <!-- Separator -->
              <div class="pt-3 text-4xl font-bold text-neutral-700">:</div>

              <!--
                MINUTES
              -->
              <div class="text-center">
                <div class="mb-1 font-mono text-5xl font-bold tabular-nums text-white sm:text-6xl">
                  {{ formatNumber(countdown.minutes) }}
                </div>
                <div class="text-xs uppercase tracking-wider text-neutral-500">
                  Mins
                </div>
              </div>

              <!-- Separator -->
              <div class="pt-3 text-4xl font-bold text-neutral-700">:</div>

              <!--
                SECONDS
              -->
              <div class="text-center">
                <div class="mb-1 font-mono text-5xl font-bold tabular-nums text-white sm:text-6xl">
                  {{ formatNumber(countdown.seconds) }}
                </div>
                <div class="text-xs uppercase tracking-wider text-neutral-500">
                  Secs
                </div>
              </div>
            </div>
          </div>

          <!--
            REGISTER BUTTON
            ===============
          -->
          <UButton
            size="xl"
            class="w-full rounded-xl sm:w-auto"
            trailing-icon="i-heroicons-arrow-right"
          >
            Register Now
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
