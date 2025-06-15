<template>
  <section ref="branchesSection" class="bg-white py-16 md:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <div ref="header" class="text-center mb-16">
        <h2
          ref="title"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          {{ $t("branches.title") || "Nuestras Sucursales" }}
        </h2>
        <p ref="subtitle" class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{
            $t("branches.subtitle") ||
            "Encuentra nuestras oficinas alrededor del mundo"
          }}
        </p>
      </div>

      <!-- Selector de país -->
      <div ref="filter" class="flex justify-center mb-12">
        <USelect
          v-model="selectedCountry"
          :options="countries"
          option-attribute="name"
          size="lg"
          class="min-w-[250px]"
          :ui="{
            rounded: 'rounded-lg',
            variant: {
              outline:
                'focus:ring-2 focus:ring-secondary focus:border-transparent border-gray-300',
            },
          }"
        />
      </div>

      <!-- Grid de sucursales -->
      <div
        ref="branchesGrid"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <!-- Tarjeta de sucursal -->
        <div
          v-for="(branch, index) in filteredBranches"
          :key="branch.id"
          :ref="
            (el) => {
              branchCards[index] = el;
            }
          "
          class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
        >
          <!-- Mapa -->
          <div class="h-48 bg-gray-100 relative overflow-hidden">
            <iframe
              :src="branch.mapUrl"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover"
            ></iframe>
          </div>

          <!-- Contenido -->
          <div class="p-6 md:p-8">
            <div class="flex items-start mb-4">
              <div class="bg-secondary/10 p-2 rounded-lg mr-4">
                <UIcon
                  name="i-heroicons-building-office"
                  class="h-6 w-6 text-secondary"
                />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">
                  {{ branch.name }}
                </h3>
                <p class="text-secondary font-medium">{{ branch.country }}</p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="h-5 w-5 text-gray-500 mt-0.5 mr-3"
                />
                <p class="text-gray-600">{{ branch.address }}</p>
              </div>

              <div class="flex items-start">
                <UIcon
                  name="i-heroicons-phone"
                  class="h-5 w-5 text-gray-500 mt-0.5 mr-3"
                />
                <p class="text-gray-600">{{ branch.phone }}</p>
              </div>

              <div class="flex items-start">
                <UIcon
                  name="i-heroicons-envelope"
                  class="h-5 w-5 text-gray-500 mt-0.5 mr-3"
                />
                <p class="text-gray-600">{{ branch.email }}</p>
              </div>

              <div class="flex items-start">
                <UIcon
                  name="i-heroicons-clock"
                  class="h-5 w-5 text-gray-500 mt-0.5 mr-3"
                />
                <p class="text-gray-600">{{ branch.schedule }}</p>
              </div>
            </div>

            <UButton
              :to="branch.directionsUrl"
              target="_blank"
              color="primary"
              variant="outline"
              class="mt-6 w-full justify-center"
              :ui="{ rounded: 'rounded-lg' }"
            >
              {{ $t("branches.get_directions") || "Cómo llegar" }}
              <UIcon
                name="i-heroicons-arrow-top-right-on-square"
                class="ml-2 h-4 w-4"
              />
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Datos de ejemplo - reemplaza con los reales de tu cliente
const branches = [
  {
    id: 1,
    name: "Sede Central",
    country: "Rusia",
    address: "Perervinskii B-R, D.19, C.1, E.1, P.Iii, Moscow, Russia",
    phone: "+7 966-193-20-11",
    email: "sales@abforwarding.ru",
    schedule: "Lunes a Viernes: 9:00 - 18:00",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.373374032104!2d37.61842331593076!3d55.75199998055305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a738fa419%3A0x7c347d506f52311f!2sRed%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
    directionsUrl: "https://goo.gl/maps/example1",
  },
  {
    id: 2,
    name: "Oficina Regional Este",
    country: "Rusia",
    address: "Ulitsa Lenina, 25, Vladivostok, Russia",
    phone: "+7 423 245-67-89",
    email: "east@abforwarding.ru",
    schedule: "Lunes a Viernes: 8:00 - 17:00",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.241354032104!2d131.88505731593076!3d43.11553698055305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39cba5249d485%3A0x719b94929fef3c84!2sVladivostok!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
    directionsUrl: "https://goo.gl/maps/example2",
  },
  {
    id: 3,
    name: "Oficina Comercial Oeste",
    country: "Alemania",
    address: "Friedrichstraße 100, 10117 Berlin, Germany",
    phone: "+49 30 1234567",
    email: "europe@abforwarding.ru",
    schedule: "Lunes a Viernes: 8:30 - 17:30",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.123456789012!2d13.38885931593076!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
    directionsUrl: "https://goo.gl/maps/example3",
  },
  {
    id: 4,
    name: "Centro Logístico Asia",
    country: "China",
    address: "88 Century Avenue, Pudong, Shanghai, China",
    phone: "+86 21 5879 1234",
    email: "asia@abforwarding.ru",
    schedule: "Lunes a Sábado: 8:00 - 20:00",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.123456789012!2d121.49735931593076!3d31.239987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27040b1f53c33%3A0x295129423c9653a6!2sShanghai!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
    directionsUrl: "https://goo.gl/maps/example4",
  },
];

// const sucursales = [
//   {
//     id: 1,
//     name: "Toronto (Oficina Central ), Canadá",
//     address: "Perervinskii B-R, D.19, C.1, E.1, P.Iii, Moscow, Russia",
//     phone: "+7 966-193-20-11",
//     email: "sales@abforwarding.ru",
//   },
// ];

// Filtrado por país
const selectedCountry = ref("Todos");
const countries = computed(() => {
  const uniqueCountries = [...new Set(branches.map((b) => b.country))];
  return ["Todos", ...uniqueCountries];
});

const filteredBranches = computed(() => {
  return selectedCountry.value === "Todos"
    ? branches
    : branches.filter((b) => b.country === selectedCountry.value);
});

// Referencias para animaciones
const branchesSection = ref(null);
const header = ref(null);
const title = ref(null);
const subtitle = ref(null);
const filter = ref(null);
const branchesGrid = ref(null);
const branchCards = ref([]);

// Animaciones
onMounted(() => {
  // Animación del encabezado
  gsap.from([title.value, subtitle.value], {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: header.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Animación del filtro
  gsap.from(filter.value, {
    y: 20,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: filter.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Animación de las tarjetas
  branchCards.value.forEach((card, index) => {
    if (card) {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  });

  // Efecto hover para las tarjetas
  branchCards.value.forEach((card) => {
    if (card) {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -5,
          duration: 0.3,
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
        });
      });
    }
  });
});
</script>

<style scoped>
/* Efecto hover personalizado para las tarjetas */
.branch-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.branch-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Estilo para el iframe del mapa */
.map-container {
  filter: grayscale(20%);
  transition: filter 0.3s ease;
}
.map-container:hover {
  filter: grayscale(0%);
}
</style>
