<template>
  <div>
    <v-notification
      :show.sync="show"
      @close="onClose"
      :color="color"
      title="Notification Example"
      >This is a example of a notification or something else</v-notification
    >
    <v-button @click="show = !show"
      >Toggle ({{ show ? "Hide" : "Show" }})</v-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      color: "primary"
    };
  },
  methods: {
    onClose() {
      this.show = false;
    }
  }
};
</script>
