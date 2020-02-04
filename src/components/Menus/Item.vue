<template>
  <li
    @click="onClick"
    class="v-menu-item w-full cursor-pointer text-noselection"
  >
    <div class="px-2">
      <v-icon v-if="icon && !iconRight" class="mr-2">{{ icon }}</v-icon>
      <span class="text-sm">
        <slot></slot>
      </span>
      <v-icon v-if="icon && iconRight" class="ml-2">{{ icon }}</v-icon>
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
    },
    icon: {
      required: false,
      type: String,
      default: null
    },
    iconRight: {
      required: false,
      type: Boolean,
      default: false
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
