<template>
  <span class="v-badge" :class="[getColorClass]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "v-badge",
  props: ["color"],
  computed: {
    getColorClass() {
      if (
        [
          "primary",
          "secondary",
          "info",
          "success",
          "danger",
          "warning"
        ].indexOf(this.color) > -1
      ) {
        return "v-badge-" + this.color;
      }
      return "";
    }
  }
};
</script>
