<template>
  <div
    class="v-menu w-full"
    :class="{
      'v-menu--horizontal': isHorizontal
    }"
  >
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
  props: ["title", "view"],
  computed: {
    isHorizontal() {
      return this.view && this.view === "horizontal";
    }
  }
};
</script>
