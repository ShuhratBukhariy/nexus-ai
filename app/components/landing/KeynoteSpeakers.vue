<script setup lang="ts">
/**
 * KEYNOTE SPEAKERS KOMPONENTI
 * ===========================
 *
 * Event'ning asosiy ma'ruzachilari.
 *
 * Dizayn xususiyatlari:
 * 1. Grid layout - 2x2
 * 2. Rasm placeholder - real loyihada NuxtImg
 * 3. Hover effect - interaktiv
 */

// Speaker interface
interface Speaker {
  id: string
  name: string
  title: string
  company: string
  image?: string // Optional - placeholder ishlatamiz
}

// Speakers data
const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Dr. Emily Carter',
    title: 'Chief AI Scientist',
    company: 'OpenAI',
  },
  {
    id: '2',
    name: 'Elon Park',
    title: 'CTO',
    company: 'DeepMind',
  },
  {
    id: '3',
    name: 'Laura Kim',
    title: 'Head of ML',
    company: 'Google Brain',
  },
  {
    id: '4',
    name: 'Dr. Alan Foster',
    title: 'Research Director',
    company: 'MIT AI Lab',
  },
]

// Placeholder images - B&W grayscale photos (Figma dizaynga mos)
const speakerImages = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=450&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop&q=80',
]
</script>

<template>
  <!--
    KEYNOTE SPEAKERS SECTION
    ========================
    id="speakers" - anchor navigation
  -->
  <section id="speakers" class="bg-neutral-950 py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!--
        SECTION HEADER
        ==============
      -->
      <div class="mb-12 lg:mb-16">
        <h2 class="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          KEYNOTE SPEAKERS
        </h2>
        <p class="max-w-2xl text-lg text-neutral-400">
          Meet the industry leaders shaping the future of AI.
        </p>
      </div>

      <!--
        SPEAKERS GRID
        =============
        2x2 grid on desktop
        1 column on mobile
      -->
      <div class="grid gap-6 sm:grid-cols-2 lg:gap-8">
        <div
          v-for="(speaker, index) in speakers"
          :key="speaker.id"
          class="group"
        >
          <!--
            SPEAKER CARD
            ============
            Rounded corner, border, hover effect
          -->
          <div class="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 transition-colors hover:border-white/20">

            <!--
              SPEAKER IMAGE
              =============
              aspect-[4/3] - 4:3 nisbat
              Real loyihada: NuxtImg component
            -->
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                :src="speakerImages[index]"
                :alt="speaker.name"
                class="h-full w-full object-cover grayscale"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>

            <!--
              SPEAKER INFO
              ============
            -->
            <div class="p-6">
              <h3 class="mb-1 text-xl font-bold text-white">
                {{ speaker.name }}
              </h3>
              <p class="text-sm text-neutral-400">
                {{ speaker.title }}, {{ speaker.company }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
