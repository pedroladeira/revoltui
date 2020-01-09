<template>
  <div class="v-card" :class="[getColorClass]">
    <div v-if="hasHeaderSlot || title" class="v-card__header">
      <span v-if="!hasHeaderSlot" class="text-xl">{{ title }}</span>
      <slot name="header"></slot>
    </div>
    <div v-if="hasContentSlot" class="v-card__content">
      <slot></slot>
    </div>
    <div v-if="hasFooterSlot" class="v-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-card",
  props: ["title", "color"],
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
        return "v-card-" + this.color;
      }
      return "";
    },
    hasHeaderSlot() {
      return !!this.$slots["header"];
    },
    hasFooterSlot() {
      return !!this.$slots["footer"];
    },
    hasContentSlot() {
      return !!this.$slots.default;
    }
  }
};
</script>
