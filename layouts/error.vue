<template>
  <LazyHydrate when-idle>
    <div class="py-16 space-y-16 bg-background-primary border-b-2 border-green-700">
      <img
        src="@/assets/404.svg"
        class="justify-center mx-auto px-16"
        alt="404 page not foud"
      >
      <div class="justify-center mx-auto flex-col px-16 text-2xl font-bold">
        <div class="text-center">
          <h2 class="text-3xl text-copy-primary leading-9 tracking-tight font-extrabold text-white-900 sm:text-4xl sm:leading-10">
            <div v-if="error.statusCode === 404">
              Page Not Found.
            </div>
            <div v-else>
              An error occured.
            </div>
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-2xl leading-7 sm:mt-4">
            <NuxtLink to="/">
              Go home?
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </LazyHydrate>
</template>

<script>

import LazyHydrate from 'vue-lazy-hydration';

export default {
  components: {
    LazyHydrate,
  },
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};

</script>
