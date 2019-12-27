<template>
  <div class="v-menu w-full">
    <div v-if="title" class="v-menu__header">
      <span class="text-xs uppercase">{{ title }}</span>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "v-menu",
  props: ["title"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.v-menu {
  padding: 0 0.5rem;
  &__header {
    margin: 0.75rem 0;

    span {
      color: var(--theme-primary);
      font-weight: bold;
    }
  }
}
</style>
