<template>
  <section id="about" class="relative bg-white py-12 md:py-18 lg:py-24">
    <!-- Ola decorativa -->

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Columna izquierda - Imagen -->
        <div class="order-2 lg:order-1">
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96 lg:h-[500px]"
          >
            <!-- <NuxtImg
              src="/images/about/nordwind-plane.jpg"
              alt="Equipo de ABForwarding Rus"
              class="w-full h-full object-cover object-center"
            /> -->
            <img
              src="/images/about/nordwind-plane.jpg"
              alt="Equipo de ABForwarding Rus"
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-primary/20"></div>
            <!-- Badge de experiencia -->
            <div
              class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            >
              <span class="text-primary font-bold text-lg"
                >+29 {{ $t("about.years_experience") }}</span
              >
            </div>
          </div>
        </div>

        <!-- Columna derecha - Contenido -->
        <div class="order-1 lg:order-2">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            ABForwarding <span class="text-primary">Rus</span>
          </h2>

          <div class="flex items-center mb-8">
            <div class="h-1 w-12 bg-primary mr-4"></div>
            <p class="text-xl md:text-2xl font-semibold text-gray-700">
              {{ $t("about.slogan") }}
              <!-- "Rápidos Seguros Confiables" -->
            </p>
          </div>

          <p class="text-gray-600 mb-6 leading-relaxed">
            {{
              $t("about.description") ||
              "Con más de 29 años de experiencia en el mercado, nos especializamos en el transporte y logística internacional de paquetería, garantizando entregas puntuales y seguras en todo el mundo."
            }}
          </p>

          <!-- Beneficios de la empresa -->
          <div class="mb-8">
            <h3
              class="text-lg font-semibold text-gray-900 mb-4 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-primary mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ $t("about.benefits_title") }}
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-600">{{ $t("about.benefit_1") }}</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-600">{{ $t("about.benefit_2") }}</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-600">{{ $t("about.benefit_3") }}</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-600">{{ $t("about.benefit_4") }}</span>
              </li>
            </ul>
          </div>

          <!-- Botón CTA -->
          <NuxtLink
            :to="localePath('/contacto')"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
          >
            {{ $t("about.cta_contact") || "Contáctenos" }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
</script>
