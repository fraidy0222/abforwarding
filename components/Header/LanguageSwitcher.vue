<script setup>
const { locale, locales, setLocale } = useI18n();

// Convertimos a array estándar para evitar problemas
const availableLocales = computed(() => {
  return Array.isArray(locales.value) ? locales.value : [locales.value];
});

const currentLocale = computed(() => {
  return availableLocales.value.find((l) => l.code === locale.value);
});

const changeLanguage = (newLocale) => {
  setLocale(newLocale);
};
</script>

<template>
  <UDropdownMenu
    :items="availableLocales"
    :popper="{ placement: 'bottom-start' }"
  >
    <UButton
      color="white"
      variant="ghost"
      :label="currentLocale?.name || locale.toUpperCase()"
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
</template>
