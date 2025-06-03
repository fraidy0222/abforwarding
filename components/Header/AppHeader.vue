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
  <header id="header" class="bg-quaternary sticky top-0 z-50">
    <div class="flex justify-between items-center h-16 px-12">
      <!-- Logo (sin cambios) -->
      <NuxtLink :to="localePath('/')" class="flex items-center">
        <ClientOnly>
          <NuxtImg
            loading="lazy"
            src="/images/logo.png"
            alt="AB Forwarding"
            class="h-12"
          />
        </ClientOnly>
      </NuxtLink>

      <!-- Navegación - Mismos links pero con nuevos estilos -->
      <nav class="hidden lg:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="localePath(link.path)"
          class="font-medium transition-colors text-[16px] px-3 py-2 rounded-lg"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- Acciones - Misma funcionalidad, nuevo diseño -->
      <HeaderLanguageSwitcher />
      <!-- Componente sin cambios -->
    </div>
  </header>
</template>
