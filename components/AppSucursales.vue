<template>
  <section id="branches" class="bg-white py-16 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          {{ $t("sucursales.title") || "Nuestras Sucursales Globales" }}
        </h2>
        <div class="flex justify-center">
          <div class="h-1 w-24 bg-secondary rounded-full"></div>
        </div>
      </div>

      <!-- Contenido de dos columnas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Lista de sucursales -->
        <div class="space-y-8">
          <div
            v-for="(branch, index) in branches"
            :key="index"
            class="p-6 border border-gray-100 rounded-xl hover:border-secondary transition-all duration-300 cursor-pointer"
            @mouseenter="hoveredBranch = index"
            @mouseleave="hoveredBranch = null"
          >
            <div class="flex items-start">
              <div class="bg-secondary/10 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-1">
                  {{ branch.city }}
                </h3>
                <p class="text-gray-600 mb-2">{{ branch.address }}</p>
                <div class="flex items-center text-sm text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {{ branch.phone }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mapa interactivo -->
        <div class="relative h-full min-h-[400px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 500"
            class="w-full h-full"
          >
            <!-- Fondo del mapa -->
            <path fill="#E5E7EB" d="M..."></path>

            <!-- Puntos de sucursales con animación -->
            <g v-for="(branch, index) in branches" :key="index">
              <!-- Punto animado -->
              <circle
                :cx="branch.coords.x"
                :cy="branch.coords.y"
                r="8"
                fill="#df771a"
                class="cursor-pointer"
                @mouseenter="hoveredBranch = index"
                @mouseleave="hoveredBranch = null"
              >
                <animate
                  attributeName="r"
                  values="8;12;8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              <!-- Efecto de pulso -->
              <circle
                :cx="branch.coords.x"
                :cy="branch.coords.y"
                r="8"
                fill="#df771a"
                fill-opacity="0.2"
                stroke="#df771a"
                stroke-width="2"
                stroke-opacity="0.3"
              >
                <animate
                  attributeName="r"
                  values="8;20;8"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0;1"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>

          <!-- Card flotante para detalles -->
          <div
            v-if="hoveredBranch !== null"
            class="absolute bg-white shadow-xl rounded-lg p-6 min-w-[280px] z-10 border border-gray-100 transition-all duration-200"
            :style="{
              left: `${branches[hoveredBranch].coords.x / 8}%`,
              top: `${branches[hoveredBranch].coords.y / 5}%`,
            }"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ branches[hoveredBranch].city }}
            </h3>
            <p class="text-gray-600 mb-3">
              {{ branches[hoveredBranch].address }}
            </p>
            <div class="flex items-center text-secondary mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {{ branches[hoveredBranch].phone }}
            </div>
            <div class="flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {{ branches[hoveredBranch].schedule }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BranchesSection",
  data() {
    return {
      hoveredBranch: null,
      branches: [
        {
          city: "Miami",
          address: "1234 Logistics Ave, Suite 500",
          phone: "+1 (305) 123-4567",
          schedule: "Lun-Vie: 8:00 - 18:00",
          coords: { x: 250, y: 300 },
        },
        {
          city: "Madrid",
          address: "Calle Transporte 42",
          phone: "+34 91 876 5432",
          schedule: "Lun-Vie: 9:00 - 17:00",
          coords: { x: 400, y: 220 },
        },
        {
          city: "Dubái",
          address: "Trade Center Bldg, Floor 10",
          phone: "+971 4 567 8901",
          schedule: "Dom-Jue: 8:00 - 17:00",
          coords: { x: 500, y: 280 },
        },
        {
          city: "Shanghái",
          address: "88 Pudong South Road",
          phone: "+86 21 2345 6789",
          schedule: "Lun-Vie: 8:30 - 17:30",
          coords: { x: 600, y: 250 },
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Animación personalizada para los puntos */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
