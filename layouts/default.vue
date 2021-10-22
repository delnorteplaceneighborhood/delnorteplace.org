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
          <div class="overflow-x-hidden">
            <ul class="lg:right-0 flex items-center justify-center">
              <li>
                <BottomDots />
              </li>
              <li>
                <BottomDots />
              </li>
            </ul>
          </div>
        </LazyHydrate>
        <LazyHydrate when-visible>
          <Footer />
        </LazyHydrate>
      </main>
    </transition>
  </div>
</template>

<script>


import LazyHydrate from 'vue-lazy-hydration';
import BottomDots from '@/components/BottomDots.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {

  components: {
    BottomDots,
    Footer,
    Header,
    LazyHydrate,
  },
};
</script>
