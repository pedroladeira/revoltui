<template>
  <nav class="v-navbar">
    <div class="flex">
      <div
        v-if="title || hasTitleSlot"
        :class="{
          'cursor-pointer': link
        }"
        class="v-navbar__title"
        @click="onClickTitle"
      >
        <slot v-if="hasTitleSlot" name="title"></slot>
        <h1 v-else>{{ title }}</h1>
      </div>
      <slot></slot>
      <div class="flex flex-1">
        <div class="flex-1"></div>
        <slot name="right"></slot>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "v-navbar",
  props: ["title", "link"],
  computed: {
    hasTitleSlot() {
      return !!this.$slots["title"];
    }
  },
  methods: {
    onClickTitle() {
      if (this.link) {
        window.location.href = this.link;
      }
    }
  }
};
</script>
