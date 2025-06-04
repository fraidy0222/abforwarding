<template>
  <section class="relative bg-white py-16 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          {{ $t("sucursales.title") || "Presencia Global" }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{
            $t("sucursales.subtitle") ||
            "Más de 50 sucursales estratégicamente ubicadas en 5 continentes"
          }}
        </p>
      </div>

      <!-- Mapa interactivo -->
      <div class="relative">
        <!-- Imagen del mapa -->
        <img
          src="/images/about-bg.png"
          alt="Mapa mundial de sucursales"
          class="w-full h-auto"
        />

        <!-- Puntos interactivos -->
        <div
          v-for="(branch, index) in branches"
          :key="index"
          class="absolute w-4 h-4 rounded-full bg-secondary cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
          :class="{ 'ring-4 ring-secondary/30': hoveredBranch === index }"
          :style="{
            left: `${branch.coords.x}%`,
            top: `${branch.coords.y}%`,
          }"
          @mouseenter="hoveredBranch = index"
          @mouseleave="hoveredBranch = null"
        >
          <!-- Animación de pulso -->
          <div
            class="absolute inset-0 rounded-full bg-secondary animate-ping opacity-30"
          ></div>
        </div>

        <!-- Tooltip flotante -->
        <div
          v-if="hoveredBranch !== null"
          class="absolute z-10 bg-white shadow-xl rounded-lg p-4 border border-gray-100 min-w-[240px] transition-all duration-200"
          :style="{
            left: `${branches[hoveredBranch].coords.x + 2}%`,
            top: `${branches[hoveredBranch].coords.y - 8}%`,
          }"
        >
          <h3 class="text-lg font-bold text-gray-900 mb-1">
            {{ branches[hoveredBranch].city }}
          </h3>
          <p class="text-sm text-gray-600 mb-2">
            {{ branches[hoveredBranch].address }}
          </p>
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
            {{ branches[hoveredBranch].phone }}
          </div>
        </div>
      </div>

      <!-- Contador de regiones -->
      <div class="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
        <div v-for="(region, index) in regions" :key="index" class="p-4">
          <div class="text-3xl font-bold text-secondary">
            {{ region.count }}
          </div>
          <div class="text-gray-600">{{ region.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GlobalBranches",
  data() {
    return {
      hoveredBranch: null,
      branches: [
        {
          city: "Miami",
          address: "Centro Logístico Internacional",
          phone: "+1 (305) 123-4567",
          coords: { x: 25, y: 45 }, // Ajusta estos % según tu imagen
        },
        {
          city: "Madrid",
          address: "Plaza Mayor, Edificio Negocios",
          phone: "+34 91 876 5432",
          coords: { x: 48, y: 35 },
        },
        {
          city: "Dubái",
          address: "Torre de Negocios, Zona Franca",
          phone: "+971 4 567 8901",
          coords: { x: 60, y: 45 },
        },
        {
          city: "Shanghái",
          address: "Distrito Financiero Pudong",
          phone: "+86 21 2345 6789",
          coords: { x: 75, y: 40 },
        },
        {
          city: "Sídney",
          address: "Circular Quay, Centro de Operaciones",
          phone: "+61 2 9876 5432",
          coords: { x: 85, y: 65 },
        },
      ],
      regions: [
        { name: "América", count: 12 },
        { name: "Europa", count: 18 },
        { name: "Asia", count: 15 },
        { name: "África", count: 5 },
        { name: "Oceanía", count: 3 },
      ],
    };
  },
};
</script>
