<template>
  <section ref="faqSection" class="bg-gray-50 py-16 md:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <div ref="faqHeader" class="text-center mb-16">
        <h2
          ref="faqTitle"
          class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          {{ $t("faq.title") || "Preguntas Frecuentes" }}
        </h2>
        <p ref="faqSubtitle" class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{
            $t("faq.subtitle") ||
            "Encuentra respuestas a las dudas más comunes sobre nuestros servicios logísticos"
          }}
        </p>
      </div>

      <!-- Contenedor de preguntas -->
      <div ref="faqContainer" class="max-w-4xl mx-auto">
        <UAccordion
          ref="faqAccordion"
          :items="faqItems"
          variant="outline"
          :ui="{
            trigger:
              'flex text-md md:text-xl text-gray-700 font-semibold items-center justify-between',
            wrapper: 'space-y-4',
            body: 'text-md md:text-lg',
            item: {
              base: 'bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300',
              padding: 'py-4 px-6',
            },
            indicator: {
              base: 'text-secondary',
            },
          }"
        >
          <template #trailing="{ open }">
            <UIcon
              :name="
                open
                  ? 'i-heroicons-minus-20-solid'
                  : 'i-heroicons-plus-20-solid'
              "
              class="w-8 h-8 text-secondary"
            />
          </template>

          <template #content="{ item }">
            <div class="pt-2 pb-4 text-gray-600">
              {{ item.content }}
            </div>
            <div v-if="item.additional" class="bg-gray-50 rounded-lg p-4 mt-3">
              <h4 class="font-medium text-gray-900 mb-2">
                Información adicional:
              </h4>
              <ul class="list-disc pl-5 space-y-1 text-gray-600">
                <li v-for="(point, i) in item.additional" :key="i">
                  {{ point }}
                </li>
              </ul>
            </div>
          </template>
        </UAccordion>

        <!-- CTA -->
        <div ref="faqCta" class="text-center mt-12">
          <p class="text-gray-600 mb-6">
            {{ $t("faq.cta_text") || "¿No encontraste lo que buscabas?" }}
          </p>
          <div ref="faqButton" class="inline-flex">
            <NuxtLink
              :to="localePath('/contacto')"
              class="inline-flex items-center px-6 py-3 borde rounded-full border-transparent text-base font-medium shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              {{ $t("faq.cta_button") || "Contáctanos" }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail-icon lucide-mail ml-3"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const localePath = useLocalePath();

const faqSection = ref(null);
const faqHeader = ref(null);
const faqTitle = ref(null);
const faqSubtitle = ref(null);
const faqContainer = ref(null);
const faqCta = ref(null);
const faqButton = ref(null);
const faqAccordion = ref(null);

const faqItems = [
  {
    label: t("faq.faq1.question"),
    content: t("faq.faq1.answer"),
  },
  {
    label: t("faq.faq2.question"),
    content: t("faq.faq2.answer"),
  },
  {
    label: t("faq.faq3.question"),
    content: t("faq.faq3.answer"),
  },
  {
    label: t("faq.faq4.question"),
    content: t("faq.faq4.answer"),
    additional: [
      t("faq.faq4.additional.additional1"),
      t("faq.faq4.additional.additional2"),
      t("faq.faq4.additional.additional3"),
    ],
  },
];
const initiAnimations = () => {
  gsap.defaults({ ease: "power3.out" });

  gsap.from([faqTitle.value, faqSubtitle.value], {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: faqHeader.value,
      start: "top 80%",
    },
  });

  // Animación del contenedor de preguntas

  const contenTL = gsap.timeline({
    scrollTrigger: {
      trigger: faqContainer.value,
      start: "top 80%",
    },
  });
  contenTL
    .from(faqContainer.value, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    })
    .from([faqCta.value, faqButton.value], {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.2)",
    });

  // Efecto hover para los items del acordeón
  const setupAccordionHover = () => {
    const items = faqAccordion.value?.$el?.querySelectorAll(
      "[data-radix-accordion-item]"
    );
    if (items) {
      items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            y: -3,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }
  };

  // Pequeño delay para asegurar que el acordeón está renderizado
  setTimeout(setupAccordionHover, 300);
};

onMounted(() => {
  initiAnimations();
});
</script>
