<template>
  <section ref="branchesSection" class="bg-gray-50 py-16 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <div ref="header" class="text-center mb-12 md:mb-16">
        <h2
          ref="title"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          {{ $t("sucursales.title") || "Nuestras Sucursales Globales" }}
        </h2>
        <p ref="subtitle" class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{
            $t("sucursales.subtitle") ||
            "Conectando el mundo a través de nuestra red logística"
          }}
        </p>
      </div>

      <!-- Mapa interactivo con puntos -->
      <UCard class="shadow-md overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6">
          <!-- Lista de países -->
          <div class="md:border-r md:border-gray-200 pr-0 md:pr-4">
            <ul
              class="flex flex-row flex-wrap md:flex-col gap-2 md:gap-4 md:sticky md:top-4"
            >
              <li
                v-for="(country, index) in countries"
                :key="index"
                class="px-3 py-2 cursor-pointer transition-colors duration-200 rounded-lg"
                :class="{
                  'border-l-4 border-primary font-medium bg-primary/10':
                    selectedCountry === country,
                  'hover:bg-gray-100': selectedCountry !== country,
                }"
                @click="selectCountry(country)"
              >
                {{ country }}
                <span class="text-gray-500 text-sm ml-1"
                  >({{ getBranchCount(country) }})</span
                >
              </li>
            </ul>
          </div>

          <!-- Mapa interactivo -->
          <div class="col-span-3 relative mt-4 md:mt-0">
            <div
              class="relative w-full h-64 md:h-[500px] overflow-hidden rounded-lg"
            >
              <!-- Imagen del mapa base -->
              <img
                ref="mapImage"
                src="/images/about-bg.png"
                alt="Mapa del mundo mostrando las locaciones de las sucursales"
                class="w-full h-full object-contain"
              />

              <!-- Puntos en el mapa -->
              <div
                v-for="branch in branches"
                :key="branch.id"
                class="absolute w-6 h-6 -ml-3 -mt-3 cursor-pointer transition-all duration-300"
                :style="{
                  left: `${branch.coordinates.x}%`,
                  top: `${branch.coordinates.y}%`,
                }"
              >
                <UPopover>
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
                    class="lucide lucide-map-pin-icon lucide-map-pin"
                    :class="{
                      'text-primary': selectedBranch?.id === branch.id,
                      'text-secondary': selectedBranch?.id !== branch.id,
                    }"
                    @click="selectBranch(branch)"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <!-- <UIcon
                    name="i-heroicons-map-pin"
                    class="h-7 w-7"
                    :class="{
                      'text-primary ring-4 ring-primary/30':
                        selectedBranch?.id === branch.id,
                      'text-secondary ring-2 ring-secondary/30':
                        selectedBranch?.id !== branch.id,
                    }"
                    @click="selectBranch(branch)"
                  /> -->

                  <template #content>
                    <div
                      v-if="selectedBranch?.id === branch.id"
                      class="bg-white shadow-lg rounded-lg p-3 min-w-[250px] z-10"
                    >
                      <h3 class="font-bold text-gray-900">
                        {{ branch.name }}
                      </h3>
                      <p class="text-sm text-gray-600">
                        {{ branch.address }}
                      </p>
                      <p class="text-sm text-gray-600">{{ branch.phone }}</p>
                    </div>
                  </template>
                </UPopover>
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
// Datos de ejemplo - reemplaza con tus datos reales
const branches = [
  {
    id: 1,
    name: "Sede Central Moscú",
    country: "Rusia",
    address: "Perervinskii B-R, D.19, C.1, E.1, P.Iii, Moscow, Russia",
    phone: "+7 966-193-20-11",
    email: "sales@abforwarding.ru",
    schedule: "Lunes a Viernes: 9:00 - 18:00",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.373374032104!2d37.61842331593076!3d55.75199998055305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a738fa419%3A0x7c347d506f52311f!2sRed%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
    coordinates: { x: 65, y: 30 }, // Coordenadas en porcentaje del mapa
  },
  {
    id: 2,
    name: "Centro Logístico Vladivostok",
    country: "Cuba",
    address: "Ulitsa Lenina, 25, Vladivostok, Russia",
    phone: "+7 423 245-67-89",
    email: "east@abforwarding.ru",
    schedule: "Lunes a Viernes: 8:00 - 17:00",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.241354032104!2d131.88505731593076!3d43.11553698055305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39cba5249d485%3A0x719b94929fef3c84!2sVladivostok!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
    coordinates: { x: 85, y: 35 },
  },
  // Agrega más sucursales aquí con sus coordenadas
];

// Estado del componente
const selectedCountry = ref<string>("Todos");
const selectedBranch = ref<any>(null);
const mapImage = ref<HTMLElement | null>(null);

// Computed
const countries = computed(() => {
  const uniqueCountries = [...new Set(branches.map((b) => b.country))];
  return ["Todos", ...uniqueCountries];
});

const filteredBranches = computed(() => {
  return selectedCountry.value === "Todos"
    ? branches
    : branches.filter((b) => b.country === selectedCountry.value);
});

// Métodos
const selectCountry = (country: string) => {
  selectedCountry.value = country;
  if (
    selectedBranch.value &&
    country !== "Todos" &&
    selectedBranch.value.country !== country
  ) {
    selectedBranch.value = null;
  }
};

const selectBranch = (branch: any) => {
  selectedBranch.value = branch;
  selectedCountry.value = branch.country;
};

const getBranchCount = (country: string) => {
  return country === "Todos"
    ? branches.length
    : branches.filter((b) => b.country === country).length;
};
</script>

<style></style>
