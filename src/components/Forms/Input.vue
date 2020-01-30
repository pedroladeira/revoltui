<template>
  <div class="mb-2">
    <label v-if="label">{{ label }}</label>
    <select
      v-if="getType === 'select'"
      :placeholder="placeholder"
      class="v-input"
      :class="[getColorClass]"
      :value="currentValue"
      @input="onInput"
    >
      <slot></slot>
    </select>
    <textarea
      v-else-if="getType === 'textarea'"
      :type="getType"
      :placeholder="placeholder"
      class="v-input"
      :class="[getColorClass]"
      :value="currentValue"
      rows="5"
      @input="onInput"
    ></textarea>
    <input
      v-else-if="getType === 'checkbox'"
      :type="getType"
      class="v-input"
      :class="[getColorClass]"
      @input="onInput"
      :checked="currentValue"
    />
    <input
      v-else
      :type="getType"
      :placeholder="placeholder"
      class="v-input"
      :class="[getColorClass]"
      :value="currentValue"
      @input="onInput"
    />
    <span v-if="message" class="color-gray">
      <i>{{ message }}</i>
    </span>
  </div>
</template>

<script>
export default {
  name: "v-input",
  props: {
    color: {
      required: false,
      type: String,
      default: null
    },
    type: {
      required: false,
      type: String,
      default: "text"
    },
    value: {
      required: false,
      type: String,
      default: null
    },
    placeholder: {
      required: false,
      type: String,
      default: null
    },
    label: {
      required: false,
      type: String,
      default: null
    },
    message: {
      required: false,
      type: String,
      default: null
    }
  },
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
      return this.type ? this.type : "text";
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
      this.$emit("input", data.target.value);
    }
  }
};
</script>
