<script setup>
import { ref } from "vue";
const { t } = useI18n();
// const localePath = useLocalePath();
const isOpen = ref(false);

// Mismos links que en Desktop
const navLinks = computed(() => [
  { name: t("header.inicio"), path: "/" },
  // { name: t("header.inicio"), path: "/" },
  { name: t("header.servicios"), path: "/" },
  { name: t("header.sobre-nosotros"), path: "/" },
  { name: t("header.sucursales"), path: "/" },
  { name: t("header.contacto"), path: "/" },
]);
</script>

<template>
  <header class="bg-white shadow-md md:hidden">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- <NuxtLink to="/">
        <img src="/images/logo.svg" alt="AB Forwarding" class="h-10" />
      </NuxtLink> -->

      <div>Logo</div>
      <div class="flex items-center space-x-4">
        <HeaderLanguageSwitcher />
        <button class="text-dark" @click="isOpen = !isOpen">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Menú desplegable -->
      <div
        v-if="isOpen"
        class="absolute top-20 left-0 right-0 bg-white shadow-lg z-50 py-4 px-6"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="block py-3 border-b border-gray-100 font-semibold"
          @click="isOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
