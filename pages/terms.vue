<template>
  <div class="bg-gray-50 min-h-screen py-16 md:py-24 lg:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-16">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          {{ $t("terms.title") }}
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed">
          {{ $t("terms.lastUpdate") }}
          <span class="font-semibold text-secondary">{{
            new Date().toLocaleDateString()
          }}</span>
        </p>
      </div>

      <!-- Contenido -->
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8"
      >
        <!-- Sección 1 -->
        <section class="space-y-4">
          <h2
            class="text-2xl md:text-3xl font-semibold text-gray-900 flex items-center"
          >
            <span class="bg-primary/10 p-2 rounded-full mr-3">
              <svg
                class="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            {{ $t("terms.sections.dataProtection.title") }}
          </h2>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("terms.sections.dataProtection.content") }}
          </p>
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
            <p class="font-medium text-gray-900">
              <span class="text-secondary">{{
                $t("terms.sections.dataProtection.highlight")
              }}</span>
            </p>
          </div>
        </section>

        <!-- Sección 2 -->
        <section class="space-y-4">
          <h2
            class="text-2xl md:text-3xl font-semibold text-gray-900 flex items-center"
          >
            <span class="bg-secondary/10 p-2 rounded-full mr-3">
              <svg
                class="h-6 w-6 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </span>
            {{ $t("terms.sections.infoDisclosure.title") }}
          </h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>{{ $t("terms.sections.infoDisclosure.points.point1") }}</li>
            <li>{{ $t("terms.sections.infoDisclosure.points.point2") }}</li>
            <li>{{ $t("terms.sections.infoDisclosure.points.point3") }}</li>
          </ul>
        </section>

        <!-- Sección 3 -->
        <section class="space-y-4">
          <h2
            class="text-2xl md:text-3xl font-semibold text-gray-900 flex items-center"
          >
            <span class="bg-primary/10 p-2 rounded-full mr-3">
              <svg
                class="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </span>
            {{ $t("terms.sections.legalAspects.title") }}
          </h2>
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed">
              {{ $t('terms.sections.legalAspects.content', { CIFFA: `<span
                class="font-semibold text-primary"
                >${$t('terms.sections.legalAspects.CIFFA')}</span
              >` }) }}
            </p>
            <ul class="list-disc pl-5 space-y-2 text-gray-600">
              <li>{{ $t("terms.sections.legalAspects.points.point1") }}</li>
              <li>{{ $t("terms.sections.legalAspects.points.point2") }}</li>
              <li>{{ $t("terms.sections.legalAspects.points.point3") }}</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
