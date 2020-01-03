<template>
  <div class="v-menu-item w-full cursor-pointer text-noselection">
    <a :href="to" :target="target">
      <div class="px-2">
        <span class="text-sm">
          <slot></slot>
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "v-menu-item",
  props: ["to", "target"],
  methods: {
    onClick() {
      if (this.to) {
        if (!this.target && this.$router) {
          this.$router.push(this.to);
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
