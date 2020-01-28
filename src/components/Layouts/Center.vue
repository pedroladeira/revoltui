<template>
  <div class="v-layout">
    <div class="h-full">
      <slot name="header"></slot>
      <div
        class="container flex"
        :class="{
          'v-layout__container': hasHeaderSlot,
          'h-full': !hasHeaderSlot
        }"
      >
        <div class="v-layout__content flex-1 h-full">
          <slot></slot>
        </div>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-layout-center",
  computed: {
    hasHeaderSlot() {
      return !!this.$slots["header"];
    }
  }
};
</script>
