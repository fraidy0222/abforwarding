<template>
  <section
    id="about"
    ref="aboutSection"
    class="relative bg-white py-12 md:py-18 lg:py-22"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Columna izquierda - Imagen -->
        <div class="order-2 lg:order-1">
          <div
            ref="imageContainer"
            class="relative rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96 lg:h-[500px]"
          >
            <img
              ref="aboutImage"
              src="/images/about/nordwind-plane.jpg"
              alt="Equipo de ABForwarding Rus"
              class="w-full h-full object-cover object-center"
            />
            <div
              ref="imageOverlay"
              class="absolute inset-0 bg-primary/20"
            ></div>
            <!-- Badge de experiencia -->
            <div
              ref="experienceBadge"
              class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            >
              <span class="text-primary font-bold text-lg"
                >+29 {{ $t("about.years_experience") }}</span
              >
            </div>
          </div>
        </div>

        <!-- Columna derecha - Contenido -->
        <div ref="textContent" class="order-1 lg:order-2">
          <h2
            ref="title"
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            ABForwarding
            <span ref="titleHighlight" class="text-primary">Rus</span>
          </h2>

          <div ref="sloganContainer" class="flex items-center mb-8">
            <div ref="sloganLine" class="h-1 w-12 bg-primary mr-4"></div>
            <p
              ref="slogan"
              class="text-xl md:text-2xl font-semibold text-gray-700"
            >
              {{ $t("about.slogan") }}
            </p>
          </div>

          <p ref="description" class="text-gray-600 mb-6 leading-relaxed">
            {{
              $t("about.description") ||
              "Con más de 29 años de experiencia en el mercado, nos especializamos en el transporte y logística internacional de paquetería, garantizando entregas puntuales y seguras en todo el mundo."
            }}
          </p>

          <!-- Beneficios de la empresa -->
          <div ref="benefitsSection" class="mb-8">
            <h3
              ref="benefitsTitle"
              class="text-lg font-semibold text-gray-900 mb-4 flex items-center"
            >
              <svg
                ref="benefitsIcon"
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
            <ul
              ref="benefitsList"
              class="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              <li
                v-for="(_, index) in 4"
                :key="index"
                :ref="
                  (el) => {
                    if (el) benefitItems[index] = el;
                  }
                "
                class="flex items-start"
              >
                <svg
                  class="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
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
                <span class="text-gray-600">{{
                  $t(`about.benefit_${index + 1}`)
                }}</span>
              </li>
            </ul>
          </div>

          <!-- Botón CTA -->
          <div ref="ctaButtonContainer" class="inline-block">
            <NuxtLink
              :to="localePath('/contacto')"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
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
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar plugins necesarios
gsap.registerPlugin(ScrollTrigger);

const localePath = useLocalePath();

// Referencias
const aboutSection = ref(null);
const imageContainer = ref(null);
const aboutImage = ref(null);
const imageOverlay = ref(null);
const experienceBadge = ref(null);
const textContent = ref(null);
const title = ref(null);
const titleHighlight = ref(null);
const sloganContainer = ref(null);
const sloganLine = ref(null);
const slogan = ref(null);
const description = ref(null);
const benefitsSection = ref(null);
const benefitsTitle = ref(null);
const benefitsIcon = ref(null);
const benefitsList = ref(null);
const benefitItems = ref([]);
const ctaButtonContainer = ref(null);

// Función para verificar y animar elementos
const animateElements = () => {
  // Configuración global de GSAP
  gsap.defaults({ ease: "power3.out" });

  // Verificar que los elementos existan antes de animar
  if (!aboutSection.value) return;

  // Animación de la imagen
  if (imageContainer.value && aboutImage.value && imageOverlay.value) {
    gsap.from(imageContainer.value, {
      x: -50,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: imageContainer.value,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(aboutImage.value, {
      scale: 1.1,
      duration: 1.5,
    });

    gsap.from(imageOverlay.value, {
      backgroundColor: "rgba(0, 95, 184, 0)",
      duration: 1.5,
    });
  }

  // Animación del contenido de texto
  if (textContent.value && title.value && description.value) {
    const contentTL = gsap.timeline({
      scrollTrigger: {
        trigger: textContent.value,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    contentTL
      .from(title.value, { y: 40, opacity: 0, duration: 1 })
      .from(
        titleHighlight.value,
        {
          scale: 1.2,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        [sloganContainer.value, slogan.value],
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .from(
        sloganLine.value,
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.6,
        },
        "-=0.3"
      )
      .from(
        description.value,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .from(
        benefitsSection.value,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .from(
        [benefitsTitle.value, benefitsIcon.value],
        {
          x: -20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .from(
        benefitItems.value.filter(Boolean),
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
        },
        "-=0.4"
      );

    // Efecto hover para el botón CTA
    if (ctaButtonContainer.value) {
      const buttonHover = gsap.to(ctaButtonContainer.value, {
        y: -3,
        duration: 0.3,
        paused: true,
      });

      ctaButtonContainer.value.addEventListener("mouseenter", () =>
        buttonHover.play()
      );
      ctaButtonContainer.value.addEventListener("mouseleave", () =>
        buttonHover.reverse()
      );

      // Asegúrate de incluir ctaButtonContainer en tus animaciones principales
      contentTL.from(
        ctaButtonContainer.value,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        "-=0.3"
      );
    }
  }

  // Animación del badge de experiencia
  if (experienceBadge.value) {
    gsap.from(experienceBadge.value, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: imageContainer.value,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  }

  // Configurar efectos hover de manera segura
  setupHoverEffects();
};

// Configurar efectos hover
const setupHoverEffects = () => {
  // Efectos hover para los beneficios
  benefitItems.value.filter(Boolean).forEach((item) => {
    const hoverAnimation = gsap.to(item, {
      scale: 1.03,
      duration: 0.3,
      paused: true,
    });

    item.addEventListener("mouseenter", () => hoverAnimation.play());
    item.addEventListener("mouseleave", () => hoverAnimation.reverse());
  });
};

// Limpiar animaciones
const cleanUpAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf(
    [
      aboutSection.value,
      imageContainer.value,
      aboutImage.value,
      imageOverlay.value,
      experienceBadge.value,
      textContent.value,
      title.value,
      titleHighlight.value,
      sloganContainer.value,
      sloganLine.value,
      slogan.value,
      description.value,
      benefitsSection.value,
      benefitsTitle.value,
      benefitsIcon.value,
      ...benefitItems.value.filter(Boolean),
    ].filter(Boolean)
  );
};

onMounted(() => {
  // Esperar a que el DOM esté listo
  setTimeout(animateElements, 100);

  // Configurar observer para cambios en el DOM
  const observer = new MutationObserver(() => {
    cleanUpAnimations();
    animateElements();
  });

  if (aboutSection.value) {
    observer.observe(aboutSection.value, {
      childList: true,
      subtree: true,
    });
  }

  onBeforeUnmount(() => {
    observer.disconnect();
    cleanUpAnimations();
  });
});
</script>
