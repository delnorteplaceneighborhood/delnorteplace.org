<template>
  <div>
    <footer class="bg-green-700 text-white flex-col lg:flex-row lg:py-8 justify-center">
      <div class="container mx-auto flex items-center justify-center ">
        <div class="mb-8 lg:mb-0 left-0">
          <div>
            Created with
            <external-link
              link="https://nuxtjs.org"
              alt="Link to nuxtjs.org"
              css="text-white"
            >
              NuxtJS
            </external-link>
            ,
            <external-link
              link="https://vuejs.org/"
              alt="Link to vuejs.org"
              css="text-white"
            >
              Vue.js
            </external-link>
            &amp;
            <external-link
              link="https://tailwindcss.com/"
              alt="Link to tailwindcss.com"
              css="text-white"
            >
              Tailwind CSS
            </external-link>
            .
          </div>
          <div>
            Designed by
            <external-link
              link="https://github.com/delnorteplaceneighborhood"
              alt="Link to Del Norte Place Neighborhood Github Account"
              css="text-white"
            >
            our community
            </external-link>
            .
            Deployed
            with
            <external-link
              link="https://vercel.com"
              alt="Link to vercel.com"
              css="text-white"
            >
              Vercel
            </external-link>
            .
          </div>
          <div>Copyright 2021-{{ currentYear }}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import ExternalLink from '@/components/atoms/ExternalLink.vue';

var currentYear = new Date().getFullYear();
export default {
  components: {
      ExternalLink,
  },
  data() {
    return {
      currentYear: currentYear,
    };
  },
};
</script>,
