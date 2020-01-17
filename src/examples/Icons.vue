<template>
  <div>
    <div class="row">
      <div v-for="(icon, i) in icons" :key="i" class="flex-1 text-center">
        <v-icon>{{ icon }}</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default {
  data() {
    return {
      icons: [
        "fas fa-cog",
        "fas fa-user-cog",
        "fas fa-sort-down",
        "fas fa-chevron-down"
      ]
    };
  }
};
</script>
