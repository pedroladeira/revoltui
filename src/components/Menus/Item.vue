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
  props: ["to", "target"],
  methods: {
    onClick() {
      if (this.to) {
        if (this.$router) {
          if (this.$route.path !== this.to) {
            this.$router.push(this.to);
          }
        } else {
          //TODO fix
          window.location.href = this.to;
        }
        this.$emit("click", this.to);
      }
    }
  }
};
</script>
