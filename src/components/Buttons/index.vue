<template>
  <button
    class="v-button py-1 px-2"
    :class="[getColorClass, getShadowClass]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "v-button",
  props: ["color", "no-shadow"],
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
        return "v-button-" + this.color;
      }
      return "";
    },
    getShadowClass() {
      if (this.noShadow) {
        return "v-button-noshadow";
      }
      return "";
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
