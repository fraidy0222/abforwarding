<script setup>
import { nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const route = useRoute();
const router = useRouter();

const availableLocales = computed(() => {
  return Array.isArray(locales.value) ? locales.value : [locales.value];
});

const currentLocale = computed(() => {
  return availableLocales.value.find((l) => l.code === locale.value);
});

const changeLanguage = async (newLocale) => {
  if (newLocale === locale.value) return;

  // 1. Guardar posición actual y hash
  const scrollPosition = window.scrollY;
  const currentHash = route.hash;

  // 2. Cambiar idioma
  await setLocale(newLocale);

  // 3. Navegar manteniendo el hash
  const newPath = switchLocalePath(newLocale) + currentHash;
  await router.push(newPath);

  // 4. Restaurar posición después de renderizado
  nextTick(() => {
    window.scrollTo({
      top: scrollPosition,
      behavior: "auto",
    });
  });
};
</script>

<template>
  <div class="flex items-center justify-center mr-1">
    <IconsGlobeIcon class="h-4.5 w-4.5 text-secondary" />
    <UDropdownMenu
      :items="availableLocales"
      :popper="{ placement: 'bottom-start' }"
    >
      <UButton
        color="white"
        variant="ghost"
        :label="currentLocale?.code.toUpperCase() || locale.toUpperCase()"
        :ui="{ rounded: 'rounded-full' }"
        trailing-icon="i-heroicons-chevron-down-20-solid"
      />

      <template #item="{ item }">
        <UButton
          color="gray"
          variant="ghost"
          :label="item.name"
          class="justify-start w-full text-left"
          :class="{ 'bg-gray-100': item.code === locale }"
          @click="changeLanguage(item.code)"
        />
      </template>
    </UDropdownMenu>
  </div>
</template>
