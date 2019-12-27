<template>
  <nav class="v-navbar">
    <div class="v-navbar__title">
      <div class="flex">
        <div v-if="title">{{ title }}</div>
        <slot name="header"></slot>
        <div class="flex-1"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "v-navbar",
  props: ["title"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.v-navbar {
  box-shadow: var(--navbar-box-shadow);
  height: var(--navbar-height);
  background-color: var(--navbar-bg-color);

  &__title {
    width: var(--navbar-title-width);
    height: 100%;
  }
}
</style>
