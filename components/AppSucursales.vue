<template>
  <section class="relative bg-gray-50 py-16 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t("sucursales.title") || "Red Global de Sucursales" }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{
            $t("sucursales.subtitle") ||
            "Conectando mercados a través de nuestra red logística internacional"
          }}
        </p>
      </div>

      <!-- Contenido de dos columnas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Columna izquierda - Lista de sucursales -->
        <div class="space-y-4">
          <div
            v-for="(branch, index) in branches"
            :key="index"
            class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-secondary transition-all duration-300 cursor-pointer group"
            :class="{ 'border-secondary': hoveredBranch === index }"
            @mouseenter="hoveredBranch = index"
            @mouseleave="hoveredBranch = null"
          >
            <div class="flex items-start">
              <div
                class="bg-secondary/10 p-2 rounded-lg mr-4 group-hover:bg-secondary/20 transition-colors"
              >
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
                <div class="flex items-center text-secondary text-sm">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {{ branch.schedule }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna derecha - Mapa interactivo -->
        <div
          class="relative h-full min-h-[400px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <!-- Imagen del mapa -->
          <img
            src="/images/about-bg.png"
            alt="Mapa mundial de sucursales"
            class="w-full h-full object-cover"
          />

          <!-- Puntos interactivos -->
          <div
            v-for="(branch, index) in branches"
            :key="'map-' + index"
            class="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
            :style="{
              left: `${branch.coords.x}%`,
              top: `${branch.coords.y}%`,
            }"
          >
            <!-- Punto con animación -->
            <div
              class="w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/30 cursor-pointer relative"
              @mouseenter="hoveredBranch = index"
              @mouseleave="hoveredBranch = null"
            >
              <div
                class="absolute inset-0 rounded-full bg-secondary animate-ping opacity-30"
              ></div>
            </div>

            <!-- Tooltip flotante -->
            <div
              class="absolute left-6 -top-4 bg-white shadow-md rounded-lg px-3 py-2 text-sm font-medium text-gray-800 whitespace-nowrap transition-all duration-300"
              :class="{
                'opacity-0 invisible': hoveredBranch !== index,
                'opacity-100 visible': hoveredBranch === index,
              }"
            >
              {{ branch.city }}
              <div
                class="absolute left-0 top-1/2 w-2 h-2 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-45"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Panel de información inferior -->
      <div
        v-if="hoveredBranch !== null"
        class="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300"
      >
        <h3 class="text-2xl font-bold text-gray-900 mb-2">
          {{ branches[hoveredBranch].city }}
        </h3>
        <p class="text-gray-600 mb-4">
          {{ branches[hoveredBranch].address }}
        </p>
        <div class="flex flex-wrap gap-4">
          <div class="flex items-center text-secondary">
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {{ branches[hoveredBranch].email }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GlobalNetwork",
  data() {
    return {
      hoveredBranch: 0, // Mostrar primera sucursal por defecto
      branches: [
        {
          city: "Miami",
          address: "1234 Logistics Avenue, Suite 500, FL 33166",
          phone: "+1 (305) 123-4567",
          email: "miami@abforwarding.com",
          schedule: "Lun-Vie: 8:00 - 18:00",
          coords: { x: 25, y: 45 },
        },
        {
          city: "Madrid",
          address: "Calle Transporte 42, 28012 Madrid",
          phone: "+34 91 876 5432",
          email: "madrid@abforwarding.com",
          schedule: "Lun-Vie: 9:00 - 17:00",
          coords: { x: 48, y: 35 },
        },
        {
          city: "Dubái",
          address: "Trade Center Building, Floor 10, Zona Franca",
          phone: "+971 4 567 8901",
          email: "dubai@abforwarding.com",
          schedule: "Dom-Jue: 8:00 - 17:00",
          coords: { x: 60, y: 45 },
        },
        {
          city: "Shanghái",
          address: "88 Pudong South Road, 200120",
          phone: "+86 21 2345 6789",
          email: "shanghai@abforwarding.com",
          schedule: "Lun-Vie: 8:30 - 17:30",
          coords: { x: 75, y: 40 },
        },
        {
          city: "Sídney",
          address: "Circular Quay, NSW 2000, Australia",
          phone: "+61 2 9876 5432",
          email: "sydney@abforwarding.com",
          schedule: "Lun-Vie: 9:00 - 17:30",
          coords: { x: 85, y: 65 },
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Animación personalizada para el hover en tarjetas */
.group:hover .group-hover\:bg-secondary\/20 {
  background-color: rgba(223, 119, 26, 0.2);
}
</style>
