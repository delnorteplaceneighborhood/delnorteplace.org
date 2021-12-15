<template>
  <nav class="z-10">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <header class="bg-indigo-600">
      <nav
        class="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div class="w-full flex items-center justify-between">
          <div class="flex items-center">
            <a
              href="/"
              class="font-medium text-white"
              key="Home"
            >
              LOGO
            </a>
          </div>
          <div class="flex ml-10 space-x-2 items-center">
            <a
              v-for="item in secondary_navigation"
              :key="item.name"
              :href="item.link"
              class="font-medium text-white pr-2"
            >{{ item.name }}</a>
            <external-link
              link="https://nextdoor.com/neighborhood/delnorteplace--phoenix--az/"
              alt="Link to vercel.com"
              css="font-medium text-white pr-2"
            />
          </div>
          <!-- <RssIcon /> -->
        </div>
      </nav>
    </header>
  </nav>
</template>

<script>
import ExternalLink from './atoms/ExternalLink.vue';
// import RssIcon from '@/components/molecules/RssIcon.vue';

export default {
  components: {
    ExternalLink,
      // RssIcon,
  },
  computed: {
    secondary_navigation() {
        var navigation_details = Array();

        navigation_details.push({
          "name": "Events",
          "link": "/events-calendar",
        });
        navigation_details.push({
          "name": "Historic Preservation",
          "link": "/historic-preservation",
        });
        navigation_details.push({
          "name": "Welcome",
          "link": "/welcome",
        });
        navigation_details.push({
          "name": "Resident Login",
          "link": "/resident-login",
        });
        // navigation_details.push({
        //   "name": "📜 History",
        //   "link": "/history",
        // });
        // navigation_details.push({
        //   "name": "🎟️ Events",
        //   "link": "/events",
        // });
        // navigation_details.push({
        //   "name": "📅 Calendar",
        //   "link": "/calendar",
        // });
        // navigation_details.push({
        //   "name": "🏘️ Community",
        //   "link": "/community",
        // });
        // navigation_details.push({
        //   "name": "🤝 Prospective Neighbors",
        //   "link": "/welcome",
        // });

        // console.log(navigation_details);
        return navigation_details;
    },
  },
};
</script>
