<template>
  <div class="v-calendar">
    <v-hello-week :options="options"></v-hello-week>
  </div>
</template>

<script>
export default {
  name: "v-calendar",
  data() {
    return {
      options: {}
    };
  }
};
</script>
