<template>
  <span class="v-dropdown">
    <v-button :color="getColor">
      <slot />
      <v-icon class="ml-1">fas fa-chevron-down</v-icon>
    </v-button>
  </span>
</template>

<script>
export default {
  name: "v-dropdown",
  props: ["color"],
  computed: {
    getColor() {
      return this.color || "default";
    }
  },
  data() {
    return {
      isOpened: false
    };
  }
};
</script>
