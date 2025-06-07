<template>
  <section class="bg-gray-50 py-16 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <div class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          {{ $t("contact.title") || "Contáctanos" }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{
            $t("contact.subtitle") ||
            "Completa el formulario y nos pondremos en contacto contigo"
          }}
        </p>
      </div>

      <!-- Contenedor del formulario -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Información de contacto -->
        <div class="space-y-8">
          <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              {{ $t("contact.info_title") || "Información de contacto" }}
            </h3>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-secondary/10 p-3 rounded-lg mr-4">
                  <UIcon
                    name="i-heroicons-phone"
                    class="h-6 w-6 text-secondary"
                  />
                </div>
                <div>
                  <h4 class="text-lg font-medium text-gray-900 mb-1">
                    {{ $t("contact.phone") || "Teléfono" }}
                  </h4>
                  <p class="text-gray-600">+7 966-193-20-11</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-secondary/10 p-3 rounded-lg mr-4">
                  <UIcon
                    name="i-heroicons-envelope"
                    class="h-6 w-6 text-secondary"
                  />
                </div>
                <div>
                  <h4 class="text-lg font-medium text-gray-900 mb-1">
                    {{ $t("contact.email") || "Email" }}
                  </h4>
                  <p class="text-gray-600">sales@abforwarding.ru</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-secondary/10 p-3 rounded-lg mr-4">
                  <UIcon
                    name="i-heroicons-map-pin"
                    class="h-6 w-6 text-secondary"
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

          <!-- Horario -->
          <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              {{ $t("contact.hours_title") || "Horario de atención" }}
            </h3>
            <ul class="space-y-3">
              <li class="flex justify-between">
                <span class="text-gray-600">{{
                  $t("contact.weekdays") || "Lunes a Sábado"
                }}</span>
                <span class="font-medium text-gray-900">9:00 - 19:00</span>
              </li>
              <li class="flex justify-between">
                <span class="text-gray-600">{{
                  $t("contact.sunday") || "Domingo"
                }}</span>
                <span class="font-medium text-gray-900">9:00 - 15:00</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Formulario -->
        <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
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
                        'focus:ring-2 focus:ring-secondary focus:border-transparent',
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
                        'focus:ring-2 focus:ring-secondary focus:border-transparent',
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
                      'focus:ring-2 focus:ring-secondary focus:border-transparent',
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
                      'focus:ring-2 focus:ring-secondary focus:border-transparent',
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
                      'focus:ring-2 focus:ring-secondary focus:border-transparent',
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
                class="underline underline-offset-3 text-medium hover:text-primary"
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
              }"
              class="w-full justify-center py-3 text-lg font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              {{ $t("contact.form_submit") || "Enviar mensaje" }}
              <UIcon name="i-heroicons-paper-airplane" class="ml-2" />
            </UButton>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
const localePath = useLocalePath();
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
  // Lógica para enviar el formulario
  console.log("Formulario enviado:", form);
  // Aquí iría tu llamada API o método de envío
};
</script>
