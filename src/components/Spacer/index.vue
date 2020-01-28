<template>
  <div class="v-spacer" :class="[getPadding, getMargin]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "v-spacer",
  props: {
    margin: {
      required: false,
      type: String,
      default: "0"
    },
    padding: {
      required: false,
      type: String,
      default: "0"
    }
  },
  computed: {
    getPadding() {
      if (
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].indexOf(Number.parseInt(this.padding)) >
        -1
      ) {
        return "p-" + Number.parseInt(this.padding);
      }
      return "";
    },
    getMargin() {
      if (
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].indexOf(Number.parseInt(this.margin)) >
        -1
      ) {
        return "m-" + Number.parseInt(this.margin);
      }
      return "";
    }
  }
};
</script>
