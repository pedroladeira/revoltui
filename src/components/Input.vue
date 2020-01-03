<template>
  <input
    :type="getType"
    :placeholder="placeholder"
    class="v-input"
    :class="[getColorClass]"
    :value="currentValue"
    @input="onInput"
  />
</template>

<script>
export default {
  name: "v-input",
  props: ["color", "type", "value", "placeholder"],
  computed: {
    getColorClass() {
      if (
        [
          "primary",
          "secondary",
          "info",
          "success",
          "danger",
          "warning"
        ].indexOf(this.color) > -1
      ) {
        return "v-input--" + this.color;
      }
      return "";
    },
    getType() {
      return "text";
    }
  },
  data() {
    return {
      currentValue: ""
    };
  },
  mounted() {
    if (this.value) {
      this.currentValue = this.value;
    }
  },
  methods: {
    onInput(data) {
      this.$emit("input", data);
    }
  }
};
</script>
