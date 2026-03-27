<template>
  <!--
    APP.VUE - Root Component
    ========================

    UApp - Nuxt UI wrapper
    - Color mode boshqaradi
    - Toast notifications
    - Modal/Slideover context

    NuxtLayout - Layout tizimi
    - default.vue layout ishlatiladi
    - Har bir sahifa o'z layoutini belgilashi mumkin

    NuxtPage - Sahifa kontenti
    - pages/ papkasidagi sahifalar
  -->
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
