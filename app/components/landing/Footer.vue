<script setup lang="ts">
/**
 * FOOTER KOMPONENTI
 * =================
 *
 * Sahifa pastki qismi.
 * Logo, copyright, va asosiy linklar.
 */

const currentYear = new Date().getFullYear()

const footerLinks = [
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms of Service', to: '#' },
  { label: 'Cookie Policy', to: '#' },
]
</script>

<template>
  <footer class="border-t border-white/5 bg-neutral-950 py-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <!--
          LOGO
          ====
        -->
        <NuxtLink to="/" class="text-lg font-bold text-white">
          nexus
        </NuxtLink>

        <!--
          FOOTER LINKS
          ============
        -->
        <div class="flex flex-wrap items-center gap-6">
          <NuxtLink
            v-for="link in footerLinks"
            :key="link.label"
            :to="link.to"
            class="text-sm text-neutral-500 transition-colors hover:text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!--
          COPYRIGHT
          =========
        -->
        <p class="text-sm text-neutral-500">
          &copy; {{ currentYear }} Nexus. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
