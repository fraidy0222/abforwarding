<template>
  <section id="services" class="relative bg-white py-12 md:py-18 lg:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado mejorado -->
      <div class="text-center mb-16">
        <span
          class="inline-block px-3 py-1 text-sm font-semibold text-secondary-800 bg-secondary-100 rounded-full mb-4"
        >
          {{ $t("services.subtitle") || "Soluciones logísticas" }}
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t("services.title") || "Nuestros Servicios" }}
        </h2>
        <div class="mx-auto h-1 w-24 bg-secondary rounded-full"></div>
      </div>

      <!-- Servicios principales - Diseño mejorado -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- Envío Aéreo -->
        <div
          class="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 z-0"
          ></div>
          <div class="relative z-10 p-8 h-full flex flex-col">
            <div
              class="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              {{ $t("services.air.title") || "Transporte Aéreo" }}
            </h3>
            <p class="text-gray-600 mb-6 flex-grow">
              {{
                $t("services.air.description") ||
                "Entrega express internacional con seguimiento en tiempo real y los más altos estándares de seguridad."
              }}
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0"
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
                <span class="text-gray-700">{{
                  $t("services.air.benefit1") || "Entrega en 24-72 horas"
                }}</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0"
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
                <span class="text-gray-700">{{
                  $t("services.air.benefit2") || "Cobertura en 150+ países"
                }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Envío Marítimo -->
        <div
          class="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 z-0"
          ></div>
          <div class="relative z-10 p-8 h-full flex flex-col">
            <div
              class="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6"
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
                class="lucide lucide-ship-icon lucide-ship h-8 w-8 text-white"
              >
                <path d="M12 10.189V14" />
                <path d="M12 2v3" />
                <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
                <path
                  d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"
                />
                <path
                  d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              {{ $t("services.sea.title") || "Transporte Marítimo" }}
            </h3>
            <p class="text-gray-600 mb-6 flex-grow">
              {{
                $t("services.sea.description") ||
                "Soluciones económicas para carga contenerizada y a granel con rutas globales y seguimiento permanente."
              }}
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0"
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
                <span class="text-gray-700">{{
                  $t("services.sea.benefit1") || "Ideal para grandes volúmenes"
                }}</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0"
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
                <span class="text-gray-700">{{
                  $t("services.sea.benefit2") || "Tarifas competitivas FCL/LCL"
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Servicios especializados - Diseño de tarjetas mejorado -->
      <div class="text-center mb-16">
        <h3 class="text-3xl font-semibold text-gray-900 mb-12">
          {{ $t("services.special.title") || "Servicios Complementarios" }}
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Almacenamiento -->
          <div
            class="bg-white p-8 rounded-xl border border-gray-100 hover:border-secondary/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div
              class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-5 mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">
              {{ $t("services.special.storage") || "Almacenamiento" }}
            </h4>
            <p class="text-gray-600 mb-4">
              {{
                $t("services.special.storage_desc") ||
                "Instalaciones seguras con control climático para mercancía de alto valor."
              }}
            </p>
            <span class="inline-block text-secondary font-medium">→</span>
          </div>

          <!-- Embalaje -->
          <div
            class="bg-white p-8 rounded-xl border border-gray-100 hover:border-secondary/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div
              class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-5 mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">
              {{ $t("services.special.packaging") || "Embalaje" }}
            </h4>
            <p class="text-gray-600 mb-4">
              {{
                $t("services.special.packaging_desc") ||
                "Soluciones de embalaje industrial certificado para transporte internacional."
              }}
            </p>
            <span class="inline-block text-secondary font-medium">→</span>
          </div>

          <!-- Aduanas Aéreas -->
          <div
            class="bg-white p-8 rounded-xl border border-gray-100 hover:border-secondary/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div
              class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-5 mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">
              {{ $t("services.special.air_customs") || "Aduanas Aéreas" }}
            </h4>
            <p class="text-gray-600 mb-4">
              {{
                $t("services.special.air_customs_desc") ||
                "Gestión integral de trámites aduaneros para envíos urgentes."
              }}
            </p>
            <span class="inline-block text-secondary font-medium">→</span>
          </div>

          <!-- Aduanas Marítimas -->
          <div
            class="bg-white p-8 rounded-xl border border-gray-100 hover:border-secondary/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div
              class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-5 mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">
              {{ $t("services.special.sea_customs") || "Aduanas Marítimas" }}
            </h4>
            <p class="text-gray-600 mb-4">
              {{
                $t("services.special.sea_customs_desc") ||
                "Despacho aduanero especializado para carga marítima e inspecciones."
              }}
            </p>
            <span class="inline-block text-secondary font-medium">→</span>
          </div>
        </div>
      </div>

      <!-- CTA mejorado -->
      <!-- <div class="text-center">
        <NuxtLink
          :to="localePath('/contacto')"
          class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-secondary-500 to-secondary-600 hover:bg-gradient-to-r hover:from-secondary-600 hover:to-secondary-500 transition-all duration-300 transform hover:scale-[1.02]"
        >
          {{ $t("services.cta") || "Solicitar cotización personalizada" }}
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
      </div> -->
    </div>
  </section>
</template>

<script setup>
// const localePath = useLocalePath();
</script>
