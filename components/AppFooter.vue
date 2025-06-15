<template>
  <footer ref="footer" class="bg-primary text-white pt-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Grid de contenido -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-12">
        <!-- Logo y descripción -->
        <div class="md:col-span-2">
          <h3 class="text-2xl font-bold mb-4">ABForwarding</h3>
          <p class="text-gray-400 leading-relaxed">
            {{ t("hero.description") }}
          </p>
        </div>

        <!-- Links de navegación -->
        <div>
          <h4 class="text-lg font-semibold mb-4">
            {{ t("footer.enlaces") }}
          </h4>
          <ul class="space-y-3">
            <li
              v-for="(link, index) in navLinks"
              :key="index"
              class="opacity-0 translate-y-4"
              :class="`link-${index}`"
            >
              <a
                :href="link.path"
                class="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="text-lg font-semibold mb-4">{{ t("footer.legal") }}</h4>
          <ul class="space-y-3">
            <li class="link-legal-1 opacity-0 translate-y-4">
              <a
                href="#"
                class="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                {{ t("footer.privacidad") }}
              </a>
            </li>
            <li class="link-legal-2 opacity-0 translate-y-4">
              <a
                href="#"
                class="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                {{ t("footer.terminos") }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Certificación IATA -->
        <div ref="iataColumn" class="flex flex-col gap-y-2 md:items-center">
          <h4 class="text-lg font-semibold mb-4">
            {{ t("footer.certificaciones") }}
          </h4>
          <div class="flex items-center gap-3 md:p-4 rounded-lg">
            <img
              src="/images/certificado.png"
              alt="IATA Certified"
              class="w-[150px] md:w-[200px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <!-- Derechos reservados -->
      <div
        ref="copyright"
        class="border-t border-gray-400 mt-12 py-4 flex items-center justify-center text-gray-400 opacity-0"
      >
        {{ t("footer.derechos") }}
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();

const navLinks = computed(() => [
  { name: t("header.inicio"), path: "/" },
  { name: t("header.servicios"), path: "/" },
  { name: t("header.sobre-nosotros"), path: "/" },
  { name: t("header.sucursales"), path: "/sucursales" },
]);

const footer = ref(null);
const iataColumn = ref(null);
const copyright = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animación cuando el elemento es visible
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".link-0",
              toggleActions: "play none none none",
            },
          });

          tl.fromTo(
            ".link-0, .link-1, .link-2, .link-3, .link-legal-1, .link-legal-2",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "power3.out",
            }
          )
            .fromTo(
              iataColumn.value,
              { opacity: 0, y: 20 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
              },
              "-=0.5"
            )
            .fromTo(
              copyright.value,
              { opacity: 0 },
              { opacity: 1, duration: 0.8 },
              "-=0.6"
            );

          observer.unobserve(entry.target); // Opcional: dejar de observar
        }
      });
    },
    { threshold: 0.1 }
  ); // 10% del elemento visible

  if (footer.value) {
    observer.observe(footer.value);
  }
});
</script>

<style scoped>
/* Efecto hover para links */
a:hover {
  transform: translateX(4px);
  transition: transform 0.3s ease;
}
</style>
