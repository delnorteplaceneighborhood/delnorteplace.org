<template>
  <div
    class="font-sans text-copy-primary
           content-wrapper flex flex-col min-h-screen overflow-hidden"
  >
    <!-- LazyHydration interfers with "sticky" header -->
    <div>
      <Header />
    </div>
    <transition
      name="fade"
      appear
    >
      <main class="bg-background-primary">
        <Nuxt />
        <LazyHydrate when-visible>
          <Footer />
        </LazyHydrate>
      </main>
    </transition>
  </div>
</template>

<script>


import LazyHydrate from 'vue-lazy-hydration';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {

  components: {
    Footer,
    Header,
    LazyHydrate,
  },
};
</script>
