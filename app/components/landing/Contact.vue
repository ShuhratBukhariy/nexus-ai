<script setup lang="ts">
/**
 * CONTACT + MAP SECTION
 * =====================
 *
 * Contact form va location ma'lumotlari.
 *
 * Komponentlar:
 * 1. Contact form - UInput, UTextarea, UButton
 * 2. Contact info - telefon, email, manzil
 * 3. Social links
 * 4. Map placeholder
 */

// Form state - reactive object
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Form submit handler
const handleSubmit = () => {
  // Real loyihada API ga yuboriladi
  console.log('Form submitted:', form)
  // Reset form
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}

// Contact info
const contactInfo = {
  phone: '+31 20 123 4567',
  location: 'Horizon Convention Center\nAmsterdam, Netherlands',
  email: 'info@nexus.com',
}

// Social links
const socialLinks = [
  { name: 'Twitter', icon: 'i-heroicons-globe-alt', url: '#' },
  { name: 'LinkedIn', icon: 'i-heroicons-briefcase', url: '#' },
  { name: 'Instagram', icon: 'i-heroicons-camera', url: '#' },
  { name: 'YouTube', icon: 'i-heroicons-play', url: '#' },
]
</script>

<template>
  <!--
    CONTACT SECTION
    ===============
    id="contact" - anchor navigation
  -->
  <section id="contact" class="bg-neutral-950 py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!--
        TWO COLUMN LAYOUT
        =================
      -->
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">

        <!--
          LEFT COLUMN - CONTACT INFO + FORM
          ==================================
        -->
        <div>
          <!--
            HEADER
            ======
          -->
          <h2 class="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We're Here To Connect And Assist You
          </h2>

          <p class="mb-8 text-neutral-400">
            Have questions about the summit? Need help with registration or travel? Our team is ready to assist you.
          </p>

          <!--
            CONTACT INFO GRID
            =================
          -->
          <div class="mb-8 grid gap-6 sm:grid-cols-2">
            <!--
              CONTACT US
              ==========
            -->
            <div>
              <h3 class="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                Contact Us
              </h3>
              <p class="text-white">
                {{ contactInfo.phone }}
              </p>
            </div>

            <!--
              EVENT LOCATION
              ==============
            -->
            <div>
              <h3 class="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                Event Location
              </h3>
              <p class="whitespace-pre-line text-white">
                {{ contactInfo.location }}
              </p>
            </div>

            <!--
              EMAIL
              =====
            -->
            <div>
              <h3 class="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                Email
              </h3>
              <a
                :href="`mailto:${contactInfo.email}`"
                class="text-white transition-colors hover:text-blue-400"
              >
                {{ contactInfo.email }}
              </a>
            </div>

            <!--
              SOCIAL LINKS
              ============
            -->
            <div>
              <h3 class="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                Follow Us
              </h3>
              <div class="flex gap-3">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  :aria-label="social.name"
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
                >
                  <UIcon :name="social.icon" class="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <!--
            CONTACT FORM
            ============
            GET IN TOUCH section
          -->
          <div class="rounded-3xl border border-white/10 bg-neutral-900/50 p-6">
            <h3 class="mb-6 text-lg font-bold text-white">
              GET IN TOUCH
            </h3>

            <p class="mb-6 text-sm text-neutral-400">
              Reach out with inquiries about tickets, partnerships, or event details.
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <!--
                NAME INPUT
                ==========
                UInput - Nuxt UI input component
              -->
              <UInput
                v-model="form.name"
                placeholder="Name"
                size="lg"
                class="w-full"
              />

              <!--
                EMAIL INPUT
                ===========
              -->
              <UInput
                v-model="form.email"
                type="email"
                placeholder="Email"
                size="lg"
                class="w-full"
              />

              <!--
                SUBJECT INPUT
                =============
              -->
              <UInput
                v-model="form.subject"
                placeholder="Subject"
                size="lg"
                class="w-full"
              />

              <!--
                MESSAGE TEXTAREA
                =================
                UTextarea - Nuxt UI textarea
              -->
              <UTextarea
                v-model="form.message"
                placeholder="Message"
                :rows="4"
                class="w-full"
              />

              <!--
                SUBMIT BUTTON
                =============
              -->
              <UButton
                type="submit"
                size="lg"
                class="w-full rounded-xl"
              >
                Send message
              </UButton>
            </form>
          </div>
        </div>

        <!--
          RIGHT COLUMN - MAP
          ==================
        -->
        <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
          <!--
            MAP PLACEHOLDER
            ===============
            Real loyihada Google Maps yoki Mapbox embed bo'ladi.
            Hozircha placeholder.
          -->
          <div class="flex h-full min-h-[500px] items-center justify-center bg-neutral-900">
            <!--
              DECORATIVE MAP PATTERN
              ======================
              CSS grid pattern - xarita effekti
            -->
            <div class="absolute inset-0 opacity-30">
              <svg
                class="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="0.5"
                      class="text-neutral-700"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <!--
              LOCATION MARKER
              ===============
            -->
            <div class="relative z-10 text-center">
              <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                <UIcon name="i-heroicons-map-pin" class="h-8 w-8 text-white" />
              </div>
              <p class="text-lg font-medium text-white">
                Horizon Convention Center
              </p>
              <p class="text-neutral-400">
                Amsterdam, Netherlands
              </p>
            </div>

            <!--
              DECORATIVE LINES
              =================
              Random chiziqlar - xarita ko'chalari
            -->
            <div class="absolute inset-0 overflow-hidden">
              <svg
                class="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- Decorative road lines -->
                <line x1="0" y1="30%" x2="100%" y2="30%" stroke="currentColor" stroke-width="2" class="text-blue-500/30" />
                <line x1="0" y1="60%" x2="100%" y2="60%" stroke="currentColor" stroke-width="2" class="text-blue-500/30" />
                <line x1="25%" y1="0" x2="25%" y2="100%" stroke="currentColor" stroke-width="2" class="text-blue-500/30" />
                <line x1="70%" y1="0" x2="70%" y2="100%" stroke="currentColor" stroke-width="2" class="text-blue-500/30" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
