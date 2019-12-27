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
        <div v-if="hasLeftSlot" class="v-layout__aside h-full">
          <slot name="left"></slot>
        </div>
        <div class="v-layout__content flex-1 h-full">
          <slot></slot>
        </div>
        <div v-if="hasRightSlot" class="v-layout__aside">
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

<style lang="scss" scoped>
.v-layout {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--layout-bg-color);

  &__container {
    height: calc(100% - var(--navbar-height));
  }

  &__aside {
    width: var(--layout-aside-width);
    height: 100%;
    overflow: none;
    overflow-y: scroll;
    box-shadow: var(--border-shadow);
    background-color: var(--layout-aside-bg-color);
  }

  &__content {
    overflow: scroll;
  }
}
</style>
