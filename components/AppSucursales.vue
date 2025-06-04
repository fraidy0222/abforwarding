<template>
  <section class="relative bg-white py-16 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          {{ $t("branches.title") || "Presencia Global" }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{
            $t("branches.subtitle") ||
            "Más de 50 sucursales estratégicamente ubicadas en 5 continentes"
          }}
        </p>
      </div>

      <!-- Contenedor del mapa -->
      <div class="relative h-[500px] md:h-[600px] w-full">
        <!-- Mapa SVG abstracto -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 600"
          class="w-full h-full"
        >
          <!-- Fondo del mapa (versión abstracta con formas geométricas) -->
          <g opacity="0.1">
            <!-- América -->
            <path
              fill="#3b82f6"
              d="M150,300 Q120,250 150,200 Q180,150 200,180 Q220,250 200,300 Q180,350 150,300 Z"
            />
            <!-- Europa -->
            <path
              fill="#3b82f6"
              d="M450,150 Q480,140 500,160 Q520,200 500,220 Q470,230 450,200 Q440,180 450,150 Z"
            />
            <!-- Asia -->
            <path
              fill="#3b82f6"
              d="M550,180 Q600,150 650,170 Q700,220 680,280 Q650,320 600,300 Q550,280 550,240 Q540,200 550,180 Z"
            />
            <!-- África -->
            <path
              fill="#3b82f6"
              d="M480,280 Q500,250 520,270 Q530,300 520,330 Q500,350 480,330 Q470,300 480,280 Z"
            />
            <!-- Oceanía -->
            <path
              fill="#3b82f6"
              d="M750,350 Q770,340 780,360 Q770,380 750,370 Q730,360 740,350 Q750,340 750,350 Z"
            />
          </g>

          <!-- Puntos de sucursales -->
          <g v-for="(branch, index) in branches" :key="index">
            <!-- Punto animado -->
            <circle
              :cx="branch.coords.x"
              :cy="branch.coords.y"
              r="8"
              fill="#df771a"
              class="cursor-pointer transition-all duration-300"
              :class="{
                'opacity-100': hoveredBranch === index,
                'opacity-90': hoveredBranch !== index,
              }"
              @mouseenter="hoveredBranch = index"
              @mouseleave="hoveredBranch = null"
            >
              <animate
                attributeName="r"
                values="6;10;6"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>

            <!-- Efecto de pulso -->
            <circle
              :cx="branch.coords.x"
              :cy="branch.coords.y"
              r="6"
              fill="#df771a"
              fill-opacity="0.2"
              stroke="#df771a"
              stroke-width="1"
              stroke-opacity="0.3"
            >
              <animate
                attributeName="r"
                values="6;20;6"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.5;0;0.5"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>

            <!-- Línea conectora al tooltip -->
            <line
              v-if="hoveredBranch === index"
              :x1="branch.coords.x"
              :y1="branch.coords.y"
              :x2="branch.coords.x + 50"
              :y2="branch.coords.y - 50"
              stroke="#df771a"
              stroke-width="2"
              stroke-dasharray="4 2"
            />
          </g>

          <!-- Tooltip flotante -->
          <foreignObject
            v-if="hoveredBranch !== null"
            :x="branches[hoveredBranch].coords.x + 60"
            :y="branches[hoveredBranch].coords.y - 80"
            width="240"
            height="120"
            class="transition-all duration-300"
          >
            <div
              class="bg-white shadow-xl rounded-lg p-4 border border-gray-100"
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
          </foreignObject>
        </svg>

        <!-- Leyenda -->
        <div
          class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
        >
          <div class="flex items-center">
            <div class="w-3 h-3 rounded-full bg-secondary mr-2"></div>
            <span class="text-sm text-gray-700"
              >Sucursales internacionales</span
            >
          </div>
        </div>
      </div>

      <!-- Contador de sucursales -->
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
          coords: { x: 180, y: 220 },
        },
        {
          city: "Madrid",
          address: "Plaza Mayor, Edificio Negocios",
          phone: "+34 91 876 5432",
          coords: { x: 450, y: 180 },
        },
        {
          city: "Dubái",
          address: "Torre de Negocios, Zona Franca",
          phone: "+971 4 567 8901",
          coords: { x: 550, y: 250 },
        },
        {
          city: "Shanghái",
          address: "Distrito Financiero Pudong",
          phone: "+86 21 2345 6789",
          coords: { x: 650, y: 220 },
        },
        {
          city: "Sídney",
          address: "Circular Quay, Centro de Operaciones",
          phone: "+61 2 9876 5432",
          coords: { x: 750, y: 350 },
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

<style scoped>
/* Animación personalizada para el hover */
circle:hover {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    r: 8;
  }
  50% {
    r: 12;
  }
  100% {
    r: 8;
  }
}
</style>
