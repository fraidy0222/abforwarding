<script setup>
import { IconsYoutubeIcon } from "#components";

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
          <p class="text-white text-sm md:text-base w-full md:w-4/6">
            {{
              t("hero.description") ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }}
          </p>
          <div class="flex flex-wrap">
            <!-- <UButton
              :to="localePath('/contacto')"
              icon="i-lucide-mail"
              class="min-w-42 max-w-full flex items-center justify-center rounded-full whitespace-nowrap overflow-hidden text-ellipsis"
              size="xl"
            >
              <span class="truncate">{{ t("hero.cta_contact") }}</span>
            </UButton> -->
            <NuxtLink
              :to="localePath('/contacto')"
              class="inline-flex items-center px-6 py-3 borde rounded-full border-transparent text-base font-medium shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              {{ $t("about.cta_contact") || "Contáctenos" }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail-icon lucide-mail ml-3"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </NuxtLink>
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
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-3 group">
              <a
                href="#"
                class="bg-gray-100 group-hover:bg-primary p-2 rounded-full transition-colors duration-200 shadow-sm"
              >
                <IconsTwitterIcon
                  class="h-4 w-4 text-secondary group-hover:text-white transition-colors duration-200"
                />
              </a>
            </div>

            <div class="flex items-center gap-3 group">
              <a
                href="#"
                class="bg-gray-100 group-hover:bg-primary p-2 rounded-full transition-colors duration-200 shadow-sm"
              >
                <IconsFacebookIcon
                  class="h-4 w-4 text-secondary group-hover:text-white transition-colors duration-200"
                />
              </a>
            </div>
            <div class="flex items-center gap-3 group">
              <a
                href="#"
                class="bg-gray-100 group-hover:bg-primary p-2 rounded-full transition-colors duration-200 shadow-sm"
              >
                <IconsWhatsappIcon
                  class="h-4 w-4 text-secondary group-hover:text-white transition-colors duration-200"
                />
              </a>
            </div>
            <div class="flex items-center gap-3 group">
              <a
                href="#"
                class="bg-gray-100 group-hover:bg-primary p-2 rounded-full transition-colors duration-200 shadow-sm"
              >
                <IconsYoutubeIcon
                  class="h-4 w-4 text-secondary group-hover:text-white transition-colors duration-200"
                />
              </a>
            </div>
          </div>
          <div
            class="text-[0.95rem] font-semibold text-gray-700 group-hover:text-primary transition-colors duration-200"
          >
            {{ $t("hero.join") }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
