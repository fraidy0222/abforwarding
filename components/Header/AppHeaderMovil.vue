<script setup>
import { ref, computed } from "vue";
const { t } = useI18n();
const localePath = useLocalePath();
const isOpen = ref(false);

const navLinks = computed(() => [
  { name: t("header.inicio"), path: "/" },
  { name: t("header.servicios"), path: "/" },
  { name: t("header.sobre-nosotros"), path: "/" },
  { name: t("header.sucursales"), path: "/" },
  { name: t("header.contacto"), path: "/" },
]);
</script>

<template>
  <header class="bg-white sticky inset-0 z-50 shadow-md lg:hidden">
    <div class="px-4 py-3 flex justify-between items-center">
      <NuxtLink :to="localePath('/')" class="flex items-center">
        <NuxtImg
          loading="lazy"
          src="/images/logo.png"
          alt="AB Forwarding"
          class="h-12"
        />
      </NuxtLink>

      <div class="flex items-center space-x-4">
        <HeaderLanguageSwitcher />
        <button
          class="text-dark w-8 h-8 relative focus:outline-none"
          aria-label="Menu toggle"
          @click="isOpen = !isOpen"
        >
          <div
            class="w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span
              class="block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out"
              :class="isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'"
            />
            <span
              class="block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out"
              :class="isOpen ? 'opacity-0' : 'opacity-100'"
            />
            <span
              class="block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out"
              :class="isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'"
            />
          </div>
        </button>
      </div>

      <!-- Menú desplegable con animaciones -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-show="isOpen"
          class="absolute top-18 left-0 right-0 bg-white shadow-lg z-50 py-4 px-6"
        >
          <NuxtLink
            v-for="(link, index) in navLinks"
            :key="link.name"
            :to="localePath(link.path)"
            class="block py-3 border-b border-gray-100 font-semibold"
            :style="{ transitionDelay: `${index * 50}ms` }"
            :class="[
              'transform transition-all duration-300 ease-out',
              isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0',
            ]"
            @click="isOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </header>
</template>
