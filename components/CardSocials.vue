<template>
  <div
    class="social-card hidden md:block absolute bottom-6 right-6 z-20 w-[230px] bg-white/90 text-primary py-4 px-5 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20"
  >
    <div class="flex flex-col items-start gap-y-2">
      <div class="flex items-center justify-between w-full gap-3">
        <div class="flex items-center gap-3 group">
          <NuxtLink
            target="_blank"
            href="#"
            class="bg-secondary/15 social-icon p-2.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            <IconsTelegramIcon
              class="h-6 w-6 text-secondary transition-colors duration-200"
            />
          </NuxtLink>
        </div>

        <div class="flex items-center gap-3 group">
          <NuxtLink
            target="_blank"
            href="https://www.facebook.com/share/1CLUyJRx1n/"
            class="bg-secondary/15 social-icon p-2.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            <IconsFacebookIcon
              class="h-6 w-6 text-secondary transition-colors duration-200"
            />
          </NuxtLink>
        </div>
        <div class="flex items-center gap-3 group">
          <NuxtLink
            target="_blank"
            href="https://chat.whatsapp.com/EAtQiP8NN1zAp0NSqyhIc4"
            class="bg-secondary/15 social-icon p-2.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            <IconsWhatsappIcon
              class="h-5 w-5 text-secondary transition-colors duration-200"
            />
          </NuxtLink>
        </div>
      </div>
      <div
        class="text-[1.1rem] font-semibold text-gray-700 group-hover:text-primary transition-colors duration-200"
      >
        {{ $t("hero.join") }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  // Animación independiente para cuando el componente se usa en otros lugares
  gsap.from(".social-card", {
    x: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.7,
  });

  // Animación escalonada de los iconos
  gsap.from(".social-icon", {
    y: 10,
    opacity: 0,
    stagger: 0.15,
    duration: 0.5,
    delay: 1,
  });
});
</script>

<style scoped>
/* Efectos hover mejorados */
.social-icon:hover {
  transform: translateY(-3px) scale(1.1);
  transition: all 0.3s ease;
}

.social-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
</style>
