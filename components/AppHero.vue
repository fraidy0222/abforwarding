<script setup>
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <section
    class="relative flex justify-between items-center pt-2 pb-12 px-4 md:px-12 bg-quaternary"
  >
    <div
      class="bg-[url(/images/plane.jpg)] h-[400px] md:h-[630px] w-full bg-cover bg-center bg-no-repeat rounded-3xl relative"
    >
      <!-- Superposición de color -->
      <div class="absolute inset-0 bg-primary/50 rounded-3xl z-10"></div>

      <!-- Contenido principal (existente) -->
      <div class="relative z-20 h-full flex items-start p-6 md:p-12">
        <div class="flex flex-col gap-y-4 md:gap-y-6 max-w-3xl">
          <h1
            class="text-white text-3xl md:text-5xl lg:text-7xl font-bold leading-tight"
          >
            {{ t("hero.title") }}
          </h1>
          <p class="text-white text-sm md:text-base">
            {{
              t("hero.description") ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }}
          </p>
          <div class="flex flex-wrap">
            <UButton
              :to="localePath('/contacto')"
              icon="i-lucide-rocket"
              class="min-w-42 max-w-full flex items-center justify-center rounded-full whitespace-nowrap overflow-hidden text-ellipsis"
              size="xl"
            >
              <span class="truncate">{{ t("hero.cta_contact") }}</span>
            </UButton>
          </div>
        </div>
      </div>

      <!-- Nuevo div añadido al final del contenedor de la imagen -->
      <div class="absolute bottom-6 left-6 z-20">
        <div class="grid grid-cols-2 gap-4">
          <UButton
            size="xl"
            variant="outline"
            class="text-gray-300 border border-gray-300 rounded-full"
            >#EnvíosSeguros
          </UButton>
          <UButton
            size="xl"
            variant="outline"
            class="text-gray-300 border border-gray-300 rounded-full"
            >#PaqueteríaExpress</UButton
          >
          <UButton
            size="xl"
            variant="outline"
            class="text-gray-300 border border-gray-300 rounded-full"
            >#EnvíosInternacionales
          </UButton>
          <UButton
            size="xl"
            variant="outline"
            class="text-gray-300 border border-gray-300 rounded-full"
            >#LatinoaméricaExpress
          </UButton>
        </div>
      </div>

      <!-- Nuevo div añadido al final del contenedor de la imagen -->
      <div
        class="absolute bottom-6 right-6 z-20 bg-white/90 text-primary px-6 py-3 rounded-3xl shadow-lg"
      >
        <!-- Contenido del nuevo div (puedes personalizarlo) -->
        <div></div>
      </div>
    </div>
  </section>
</template>
