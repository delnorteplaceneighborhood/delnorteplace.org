<template>
  <a
    role="button"
    :class="css"
    target="_blank"
    rel="noopener noreferrer"
    :href="link"
    :alt="alt"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    css: {
      type: String,
      default: "hover:text-green-700 text-green-500",
      required: false,
    },
  },
};
</script>
