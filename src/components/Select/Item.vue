<template>
  <div @click="onClick" class="v-select-item cursor-pointer">
    <div class="px-2">
      <span class="text-sm">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select-item",
  props: {
    value: {
      required: false,
      default: null
    }
  },
  methods: {
    onClick() {
      this.$emit("click", this.value);
    }
  }
};
</script>
