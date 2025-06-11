<script setup>
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <section
    class="relative flex justify-between items-center pt-2 pb-5 px-4 md:px-12 bg-quaternary"
  >
    <div
      class="bg-[url(/images/plane.jpg)] h-[400px] md:h-[630px] w-full bg-cover bg-center bg-no-repeat rounded-3xl relative"
    >
      <!-- Superposición de color -->
      <div class="absolute inset-0 bg-primary/50 rounded-3xl z-10" />

      <!-- Contenido principal (existente) -->
      <div
        class="relative z-20 h-full flex items-center md:items-start p-6 md:p-12"
      >
        <div class="flex flex-col gap-y-6 md:gap-y-6 max-w-3xl">
          <h1
            class="text-white text-3xl md:text-5xl lg:text-7xl font-bold leading-tight"
          >
            {{ t("hero.title") }}
          </h1>
          <p class="text-white text-base md:text-lg w-full md:w-5/6">
            {{
              t("hero.description") ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }}
          </p>
          <div class="flex flex-wrap gap-4">
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

            <!-- <NuxtLink
              :to="localePath('/contacto')"
              class="inline-flex items-center px-6 py-3 border border-white rounded-full text-base font-medium shadow-sm text-white bg-transparent hover:bg-primary-dark transition-colors duration-300"
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
                class="lucide lucide-calculator-icon lucide-calculator mr-3"
              >
                <rect width="16" height="20" x="4" y="2" rx="2" />
                <line x1="8" x2="16" y1="6" y2="6" />
                <line x1="16" x2="16" y1="14" y2="18" />
                <path d="M16 10h.01" />
                <path d="M12 10h.01" />
                <path d="M8 10h.01" />
                <path d="M12 14h.01" />
                <path d="M8 14h.01" />
                <path d="M12 18h.01" />
                <path d="M8 18h.01" />
              </svg>
              {{ $t("about.calculate_price") || "Calculadora de precio" }}
            </NuxtLink> -->
          </div>
        </div>
      </div>

      <!-- Nuevo div añadido al final del contenedor de la imagen -->
      <div class="absolute hidden lg:block bottom-6 left-6 z-20">
        <div class="grid grid-cols-2 gap-4">
          <UButton
            size="xl"
            variant="outline"
            class="text-gray-300 border border-gray-300 rounded-full flex items-center justify-center"
            >{{ $t("hero.hastag1") }}
          </UButton>
          <UButton
            size="xl"
            variant="outline"
            class="text-gray-300 border border-gray-300 rounded-full flex items-center justify-center"
            >{{ $t("hero.hastag2") }}</UButton
          >
          <UButton
            size="xl"
            variant="outline"
            class="text-gray-300 border border-gray-300 rounded-full flex items-center justify-center"
            >{{ $t("hero.hastag3") }}
          </UButton>
          <UButton
            size="xl"
            variant="outline"
            class="text-gray-300 border border-gray-300 rounded-full flex items-center justify-center"
            >{{ $t("hero.hastag4") }}
          </UButton>
        </div>
      </div>

      <!-- Nuevo div añadido al final del contenedor de la imagen -->
      <div
        class="hidden md:block absolute bottom-6 right-6 z-20 w-[230px] bg-white/90 text-primary py-4 px-5 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20"
      >
        <div class="flex flex-col items-start gap-y-2">
          <div class="flex items-center justify-between w-full gap-3">
            <div class="flex items-center gap-3 group">
              <a
                href="#"
                class="bg-secondary/15 p-2.5 rounded-full transition-colors duration-200 shadow-sm"
              >
                <IconsTelegramIcon
                  class="h-6 w-6 text-secondary transition-colors duration-200"
                />
              </a>
            </div>

            <div class="flex items-center gap-3 group">
              <NuxtLink
                target="_blank"
                href="https://www.facebook.com/share/1CLUyJRx1n/"
                class="bg-secondary/15 p-2.5 rounded-full transition-colors duration-200 shadow-sm"
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
                class="bg-secondary/15 p-2.5 rounded-full transition-colors duration-200 shadow-sm"
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
    </div>
  </section>
</template>
