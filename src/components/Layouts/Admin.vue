<template>
  <div class="v-layout">
    <div class="h-full">
      <slot name="header"></slot>
      <div
        class="flex"
        :class="{
          'v-layout__container': hasHeaderSlot,
          'h-full': !hasHeaderSlot
        }"
      >
        <div
          v-if="hasLeftSlot"
          class="v-layout__aside-left h-full"
          :class="{ 'v-layout__aside--visible': asideLeft }"
        >
          <slot name="left"></slot>
        </div>
        <div
          class="v-layout__content flex-1 h-full"
          :class="{ container: centerContainer }"
        >
          <slot></slot>
        </div>
        <div v-if="hasRightSlot" class="v-layout__aside-right">
          <slot name="right"></slot>
        </div>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-layout-admin",
  props: {
    centerContainer: {
      type: Boolean,
      default: false
    },
    asideLeft: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    asideLeft(val) {
      console.log("asideLeft", val);
    }
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots["header"];
    },
    hasLeftSlot() {
      return !!this.$slots["left"];
    },
    hasRightSlot() {
      return !!this.$slots["right"];
    }
  }
};
</script>
