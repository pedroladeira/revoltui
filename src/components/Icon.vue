<template>
  <span class="v-icon" :class="[getColorClass, getBordered]">
    <i :class="getIconName"></i>
  </span>
</template>

<script>
export default {
  name: "v-icon",
  props: ["color", "border"],
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
        return "v-icon--" + this.color;
      }
      return "";
    },
    getBordered() {
      return this.border ? 'v-icon--border' : '';
    },
    getIconName() {
      if (this.$slots.default) {
        return this.$slots.default[0].text;
      }
      return '';
    }
  }
};
</script>
