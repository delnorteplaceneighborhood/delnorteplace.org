<template>
  <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
  <div class="h-screen">
    <!-- <div class="border-b-2 border-green-700"> -->
    <section class="pb-24 sm:pb-48 md:pb-96 justify-center w-full pt-4 sm:pt-6 md:pt-8 overflow-hidden md:pt-10 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div class="text-center text-copy-primary text-4xl md:text-7xl font-extrabold leading-none tracking-tight">
          Events and Calendar
        </div>
        <div class="text-center text-copy-primary text-2xl md:text-4xl italic leading-none tracking-tight pt-20 md:pt-40">
          The page will be filled with past and upcoming events open to all!
        </div>
      </div>
    </section>
    <!-- </div> -->
  </div>
</template>

<script>


// import LazyHydrate from 'vue-lazy-hydration';

export default {
  components: {
    // LazyHydrate,
  },
  layout: 'default',
  head: {
    title: 'Del Norte Place Neighborhood',
  },
};

</script>
