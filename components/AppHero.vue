<template>
  <section
    ref="heroSection"
    class="relative flex justify-between items-center pt-2 pb-5 px-4 md:px-12 bg-quaternary"
  >
    <div
      class="bg-[url(/images/plane.jpg)] h-[400px] md:h-[630px] w-full bg-cover bg-center bg-no-repeat rounded-3xl relative"
    >
      <!-- Superposición de color -->
      <div
        ref="backgroundColor"
        class="absolute inset-0 bg-primary/50 rounded-3xl z-10"
      />

      <!-- Contenido principal (existente) -->
      <div
        class="relative z-20 h-full flex items-center md:items-start p-6 md:p-12"
      >
        <div class="flex flex-col gap-y-6 md:gap-y-6 max-w-3xl">
          <h1
            ref="title"
            class="text-white text-3xl md:text-5xl lg:text-7xl font-bold leading-tight"
          >
            {{ t("hero.title") }}
          </h1>
          <p
            ref="description"
            class="text-white text-base md:text-lg w-full md:w-5/6"
          >
            {{
              t("hero.description") ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }}
          </p>
          <div ref="contactButton" class="flex flex-wrap gap-4">
            <NuxtLink
              :to="localePath('/contacto')"
              class="inline-flex items-center px-6 py-3 border rounded-full border-transparent text-base font-medium shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-headset-icon lucide-headset mr-3"
              >
                <path
                  d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"
                />
                <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
              </svg>
              {{ $t("about.cta_contact") || "Contáctenos" }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Nuevo div añadido al final del contenedor de la imagen -->
      <ButtonsHashtags class="hashtag-container" />

      <!-- Nuevo div añadido al final del contenedor de la imagen -->
      <CardSocials class="social-card" />
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const localePath = useLocalePath();

const heroSection = ref(null);
const backgroundColor = ref(null);
const title = ref(null);
const description = ref(null);
const contactButton = ref(null);

onMounted(() => {
  // Animaciones para el hero
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Animación del overlay
  tl.from(backgroundColor.value, {
    opacity: 0,
    duration: 0.8,
  });

  // Animación escalonada del contenido
  tl.from(
    title.value,
    {
      y: 40,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.4"
  )
    .from(
      description.value,
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.3"
    )
    .from(
      contactButton.value,
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.2"
    )
    .from(
      ".lucide-headset",
      {
        x: -10,
        opacity: 0,
        duration: 0.4,
      },
      "-=0.2"
    );
});
</script>
