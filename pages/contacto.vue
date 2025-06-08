<template>
  <section ref="contactSection" class="bg-gray-50 py-16 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado con animación -->
      <div ref="header" class="text-center mb-12 md:mb-16">
        <h2
          ref="title"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          {{ $t("contact.title") || "Contáctanos" }}
        </h2>
        <p ref="subtitle" class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{
            $t("contact.subtitle") ||
            "Completa el formulario y nos pondremos en contacto contigo"
          }}
        </p>
      </div>

      <!-- Contenedor del formulario con animación -->
      <div ref="contentGrid" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Columna izquierda (Información) -->
        <div class="space-y-8">
          <!-- Tarjeta de información -->
          <div
            ref="infoCard"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8 border border-gray-100"
          >
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              {{ $t("contact.info_title") || "Información de contacto" }}
            </h3>

            <div class="space-y-6">
              <!-- Item teléfono -->
              <div ref="phoneItem" class="flex items-start group">
                <div
                  class="bg-secondary/10 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:bg-secondary/20"
                >
                  <UIcon
                    name="i-heroicons-phone"
                    class="h-6 w-6 text-secondary transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 class="text-lg font-medium text-gray-900 mb-1">
                    {{ $t("contact.phone") || "Teléfono" }}
                  </h4>
                  <p class="text-gray-600">+7 966-193-20-11</p>
                </div>
              </div>

              <!-- Item email -->
              <div ref="emailItem" class="flex items-start group">
                <div
                  class="bg-secondary/10 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:bg-secondary/20"
                >
                  <UIcon
                    name="i-heroicons-envelope"
                    class="h-6 w-6 text-secondary transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 class="text-lg font-medium text-gray-900 mb-1">
                    {{ $t("contact.email") || "Email" }}
                  </h4>
                  <p class="text-gray-600">sales@abforwarding.ru</p>
                </div>
              </div>

              <!-- Item dirección -->
              <div ref="addressItem" class="flex items-start group">
                <div
                  class="bg-secondary/10 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:bg-secondary/20"
                >
                  <UIcon
                    name="i-heroicons-map-pin"
                    class="h-6 w-6 text-secondary transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 class="text-lg font-medium text-gray-900 mb-1">
                    {{ $t("contact.address") || "Dirección" }}
                  </h4>
                  <p class="text-gray-600">
                    Perervinskii B-R,D.19, C.1, E.1, P.Iii Moscow, Russia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Tarjeta de horario -->
          <div
            ref="hoursCard"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8 border border-gray-100"
          >
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              {{ $t("contact.hours_title") || "Horario de atención" }}
            </h3>
            <ul class="space-y-3">
              <li
                class="flex justify-between hover:bg-gray-50 px-2 py-1 rounded-lg transition-colors duration-200"
              >
                <span class="text-gray-600">{{
                  $t("contact.weekdays") || "Lunes a Sábado"
                }}</span>
                <span class="font-medium text-gray-900">9:00 - 19:00</span>
              </li>
              <li
                class="flex justify-between hover:bg-gray-50 px-2 py-1 rounded-lg transition-colors duration-200"
              >
                <span class="text-gray-600">{{
                  $t("contact.sunday") || "Domingo"
                }}</span>
                <span class="font-medium text-gray-900">9:00 - 15:00</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Columna derecha (Formulario) -->
        <div
          ref="formCard"
          class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8 border border-gray-100"
        >
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">
            {{ $t("contact.form_title") || "Envíanos un mensaje" }}
          </h3>

          <form class="space-y-6" @submit.prevent="submitForm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UFormField
                :label="$t('contact.form_name') || 'Nombre completo'"
                required
              >
                <UInput
                  v-model="form.name"
                  size="lg"
                  class="w-full"
                  :ui="{
                    rounded: 'rounded-lg',
                    variant: {
                      outline:
                        'focus:ring-2 focus:ring-secondary focus:border-transparent border-gray-300',
                    },
                  }"
                />
              </UFormField>

              <UFormField :label="$t('contact.form_email') || 'Email'" required>
                <UInput
                  v-model="form.email"
                  type="email"
                  size="lg"
                  class="w-full"
                  :ui="{
                    rounded: 'rounded-lg',
                    variant: {
                      outline:
                        'focus:ring-2 focus:ring-secondary focus:border-transparent border-gray-300',
                    },
                  }"
                />
              </UFormField>
            </div>

            <UFormField :label="$t('contact.form_phone') || 'Teléfono'">
              <UInput
                v-model="form.phone"
                size="lg"
                class="w-full"
                :ui="{
                  rounded: 'rounded-lg',
                  variant: {
                    outline:
                      'focus:ring-2 focus:ring-secondary focus:border-transparent border-gray-300',
                  },
                }"
              />
            </UFormField>

            <UFormField
              :label="$t('contact.form_subject') || 'Asunto'"
              required
            >
              <USelect
                v-model="form.subject"
                :items="subjects"
                size="lg"
                class="w-full"
                :ui="{
                  rounded: 'rounded-lg',
                  variant: {
                    outline:
                      'focus:ring-2 focus:ring-secondary focus:border-transparent border-gray-300',
                  },
                }"
              />
            </UFormField>

            <UFormField
              :label="$t('contact.form_message') || 'Mensaje'"
              required
            >
              <UTextarea
                v-model="form.message"
                :rows="5"
                class="w-full"
                :ui="{
                  rounded: 'rounded-lg',
                  variant: {
                    outline:
                      'focus:ring-2 focus:ring-secondary focus:border-transparent border-gray-300',
                  },
                }"
              />
            </UFormField>

            <div class="flex items-center justify-between">
              <UCheckbox
                v-model="form.agreeTerms"
                :ui="{
                  wrapper: 'flex items-center',
                  label: 'text-sm text-gray-600',
                }"
                :label="
                  $t('contact.form_agree') || 'Acepto la política de privacidad'
                "
              />
              <NuxtLink
                :to="localePath('/terms')"
                class="underline underline-offset-3 text-medium hover:text-primary transition-colors duration-200"
                >{{
                  $t("contact.form_terms") || "Términos y Condiciones"
                }}</NuxtLink
              >
            </div>

            <UButton
              type="submit"
              size="xl"
              color="primary"
              :disabled="!form.agreeTerms"
              :ui="{
                rounded: 'rounded-lg',
                disabled: 'cursor-not-allowed opacity-50',
                base: 'transition-all duration-300 hover:scale-[1.02]',
              }"
              class="w-full justify-center py-3 text-lg font-medium shadow-md hover:shadow-lg"
            >
              {{ $t("contact.form_submit") || "Enviar mensaje" }}
              <UIcon
                name="i-heroicons-paper-airplane"
                class="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </UButton>
          </form>
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

// Referencias para animaciones
const contactSection = ref(null);
const header = ref(null);
const title = ref(null);
const subtitle = ref(null);
const contentGrid = ref(null);
const infoCard = ref(null);
const hoursCard = ref(null);
const formCard = ref(null);
const phoneItem = ref(null);
const emailItem = ref(null);
const addressItem = ref(null);

// Datos del formulario
const form = reactive({
  name: "",
  email: "",
  phone: "",
  subject: null,
  message: "",
  agreeTerms: false,
});

const subjects = [
  {
    label: t("contact.subjects.shipping") || "Consulta sobre envíos",
    value: "shipping",
  },
  {
    label: t("contact.subjects.quote") || "Solicitud de cotización",
    value: "quote",
  },
  {
    label: t("contact.subjects.tracking") || "Seguimiento de paquete",
    value: "tracking",
  },
  { label: t("contact.subjects.other") || "Otro asunto", value: "other" },
];

const submitForm = async () => {
  console.log("Click");
};

onMounted(() => {
  // Configuración global de GSAP
  gsap.defaults({ ease: "power3.out" });

  // 1. Animación del encabezado
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

  // 2. Animación del grid de contenido (asegurando que permanezca visible)
  gsap.from(contentGrid.value, {
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: contentGrid.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // 3. Animación independiente para cada tarjeta
  const animateCard = (element, xOffset = 0) => {
    if (!element) return;

    gsap.from(element, {
      x: xOffset,
      y: 20,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  };

  gsap.from(hoursCard.value, {
    y: 20,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: infoCard.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Animar tarjetas con desplazamientos opuestos
  animateCard(infoCard.value, -30);
  animateCard(formCard.value, 30);

  // 4. Animación de los items de contacto (solo cuando son visibles)
  const contactItems = [
    phoneItem.value,
    emailItem.value,
    addressItem.value,
  ].filter(Boolean);

  contactItems.forEach((item, index) => {
    if (item) {
      gsap.from(item, {
        x: 30,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: infoCard.value,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }
  });
});
</script>
