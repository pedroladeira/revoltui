<template>
  <span class="v-dropdown">
    <v-button :color="getColor"> <slot /> I </v-button>
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
  }
};
</script>
