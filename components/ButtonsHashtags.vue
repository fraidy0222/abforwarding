<template>
  <div
    ref="buttonHashtag"
    class="absolute hidden lg:block bottom-6 left-6 z-20"
  >
    <div class="grid grid-cols-2 gap-4">
      <UButton
        v-for="(hashta, index) in hashtags"
        :key="index"
        size="xl"
        variant="outline"
        class="text-gray-300 border border-gray-300 rounded-full flex items-center justify-center"
        >{{ hashta.name }}
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
const { t } = useI18n();

const buttonHashtag = ref(null);
defineProps({
  class: {
    type: String,
    default: "",
  },
});

const hashtags = computed(() => [
  { name: t("hero.hastag1") },
  { name: t("hero.hastag2") },
  { name: t("hero.hastag3") },
  { name: t("hero.hastag4") },
]);

onMounted(() => {
  // Opcional: Animación independiente para cuando el componente se usa en otros lugares
  gsap.from(buttonHashtag.value, {
    y: 20,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6,
    delay: 0.5,
  });
});
</script>

<style></style>
