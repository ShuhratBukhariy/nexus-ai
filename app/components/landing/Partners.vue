<script setup lang="ts">
/**
 * PARTNERS/SPONSORS KOMPONENTI
 * ============================
 *
 * Sponsor logolarni ko'rsatish.
 *
 * Senior yondashuv:
 * 1. Logo'lar array'da - oson boshqarish
 * 2. SVG o'rniga matn - real loyihada SVG/rasm bo'ladi
 * 3. Grayscale filter - dizayndagi stil
 * 4. Hover effect - interaktivlik
 */

// Partners data - real loyihada CMS yoki API dan keladi
const partners = [
  { name: 'amazon', displayName: 'amazon' },
  { name: 'dribbble', displayName: 'dribbble' },
  { name: 'hubspot', displayName: 'HubSpot' },
  { name: 'notion', displayName: 'Notion' },
  { name: 'gumroad', displayName: 'gumroad' },
]
</script>

<template>
  <!--
    PARTNERS SECTION
    ================

    py-12 - vertical padding
    border-y - yuqori va pastda chiziq
    border-white/5 - juda shaffof chiziq
  -->
  <section class="border-y border-white/5 bg-neutral-950 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!--
        PARTNERS GRID
        =============
        flex flex-wrap - responsive grid
        items-center justify-center - markazda
        gap-x-12 gap-y-8 - orasidagi masofa

        Nima uchun grid emas?
        - flex-wrap logolar soniga qarab moslashadi
        - grid esa qat'iy ustunlar talab qiladi
      -->
      <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="group"
        >
          <!--
            PARTNER LOGO
            ============
            Real loyihada bu <img> yoki <NuxtImg> bo'ladi
            Hozircha matn ishlatamiz

            Stillar:
            - text-neutral-500 - xira rang
            - grayscale - qora-oq (agar rasm bo'lsa)
            - hover: brightness va scale - interaktivlik
            - transition - smooth animatsiya
          -->
          <span
            class="text-xl font-semibold text-neutral-500 transition-all duration-300 group-hover:text-neutral-300"
          >
            {{ partner.displayName }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
