<template>
  <!--
    DEFAULT LAYOUT
    ==============
    Barcha sahifalar uchun umumiy tuzilma.

    Nima uchun layout kerak?
    1. Header/Footer bir joyda - DRY prinsipi
    2. Sahifalar o'rtasida transition
    3. Global wrapper stillar

    <slot /> - sahifa kontenti shu yerga joylashadi
  -->
  <div class="min-h-screen bg-neutral-950 text-white">
    <!-- Header - har bir sahifada ko'rinadi -->
    <LandingHeader />

    <!-- Main content - <NuxtPage /> kontenti -->
    <main>
      <slot />
    </main>

    <!-- Footer - keyinroq qo'shamiz -->
    <!-- <LandingFooter /> -->
  </div>
</template>
