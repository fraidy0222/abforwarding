<script setup>
import { computed } from "vue";
const { t } = useI18n();
const localePath = useLocalePath();

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
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <!-- <NuxtLink to="/" class="flex items-center">
        <img src="/images/logo.svg" alt="AB Forwarding" class="h-14" />
      </NuxtLink> -->

      <div>Logo</div>
      <!-- Navegación -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="localePath(link.path)"
          class="font-montserrat font-medium text-dark hover:text-accent transition-colors duration-300"
          :class="{ 'text-primary': $route.path === link.path }"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- Acciones -->
      <div class="flex items-center gap-6">
        <HeaderLanguageSwitcher />
        <!-- <LanguageSwitcher /> -->
      </div>
    </div>
  </header>
</template>
