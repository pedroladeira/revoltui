<template>
  <li
    @click="onClick"
    class="v-menu-item w-full cursor-pointer text-noselection"
  >
    <div class="px-2">
      <span class="text-sm">
        <slot></slot>
      </span>
    </div>
  </li>
</template>

<script>
export default {
  name: "v-menu-item",
  props: {
    to: {
      required: false,
      type: String
    },
    link: {
      required: false,
      type: String
    },
    target: {
      required: false,
      type: String,
      default: "_self"
    }
  },
  methods: {
    onClick() {
      if (this.to && this.$router) {
        if (this.$route.path !== this.to) {
          this.$router.push(this.to);
        }
        this.$emit("click", this.to);
      }
      if (!this.to && this.link) {
        window.open(this.link, this.target);
        this.$emit("click", this.link);
      }
    }
  }
};
</script>
