<template>
  <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
  <div class="h-screen">
    <!-- <div class="border-b-2 border-green-700"> -->
    <Hero />
    <!-- </div> -->
  </div>
</template>

<script>


// import LazyHydrate from 'vue-lazy-hydration';
import Hero from '@/components/Hero.vue';

export default {
  components: {
    // LazyHydrate,
    Hero,
  },
  layout: 'default',
  head: {
    title: 'Del Norte Place Neighborhood',
  },
};

</script>
