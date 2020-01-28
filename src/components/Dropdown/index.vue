<template>
  <div class="v-dropdown">
    <v-button :color="getColor" @click="toggle">
      <slot />
      <v-icon class="ml-1">fas fa-chevron-down</v-icon>
    </v-button>
    <div v-if="isOpened" class="v-dropdown__content">
      <ul>
        <li class="v-dropdown-item">
          Item One Item One Item One Item One
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-dropdown",
  props: ["color"],
  computed: {
    getColor() {
      return this.color || "default";
    }
  },
  data() {
    return {
      isOpened: false
    };
  },
  mounted() {
    document.addEventListener("click", this.isOutside);
  },
  methods: {
    toggle() {
      this.isOpened = !this.isOpened;
    },
    isOutside(event) {
      const el = this.$el;
      if (event.target.contains(el)) {
        this.isOpened = false;
      }
    }
  }
};
</script>
