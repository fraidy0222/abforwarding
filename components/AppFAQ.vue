<template>
  <section class="bg-gray-50 py-16 md:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t("faq.title") || "Preguntas Frecuentes" }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{
            $t("faq.subtitle") ||
            "Encuentra respuestas a las dudas más comunes sobre nuestros servicios logísticos"
          }}
        </p>
      </div>

      <!-- Contenedor de preguntas -->
      <div class="max-w-4xl mx-auto">
        <UAccordion
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
        <div class="text-center mt-12">
          <p class="text-gray-600 mb-6">
            {{ $t("faq.cta_text") || "¿No encontraste lo que buscabas?" }}
          </p>
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
  </section>
</template>

<script setup>
const { t } = useI18n();
const localePath = useLocalePath();

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
  //   {
  //     label: "¿Cómo puedo rastrear mi paquete?",
  //     content:
  //       "Todos nuestros envíos incluyen un número de seguimiento que podrás ingresar en nuestra plataforma online para conocer el estado en tiempo real.",
  //     additional: [
  //       "Notificaciones por email en cada actualización",
  //       "Soporte telefónico para consultas específicas",
  //     ],
  //   },
  //   {
  //     label: "¿Tienen restricciones para ciertos productos?",
  //     content:
  //       "Sí, seguimos las regulaciones internacionales para el transporte de mercancías. Los productos peligrosos, perecederos o restringidos requieren autorización previa.",
  //   },
  //   {
  //     label: "¿Cuáles son sus horarios de atención?",
  //     content:
  //       "Nuestro centro de atención al cliente está disponible de lunes a viernes de 8:00 a 18:00 (GMT-5), con soporte de emergencias 24/7 para clientes prioritarios.",
  //   },
  //   {
  //     label: "¿Ofrecen servicios de embalaje y almacenamiento?",
  //     content:
  //       "Sí, contamos con servicios profesionales de embalaje industrial y almacenamiento seguro en nuestras instalaciones aduaneras.",
  //     additional: [
  //       "Embalaje certificado para transporte internacional",
  //       "Almacenes con control climático",
  //       "Seguro incluido en todos nuestros paquetes",
  //     ],
  //   },
];
</script>
