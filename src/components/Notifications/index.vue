<template>
  <div
    v-show="isVisible"
    class="v-notification"
    :class="[getPositionXClass, getPositionYClass]"
  >
    <v-card :title="title" :color="color">
      <slot></slot>
      <div slot="footer" class="text-right">
        <v-button v-if="!$slots['footer']" @click="onClose" :color="color"
          >Close</v-button
        >
        <slot name="footer"></slot>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "v-notification",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "default"
    },
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    getPositionXClass() {
      return "v-notification--right";
    },
    getPositionYClass() {
      return "v-notification--top";
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  watch: {
    show(val) {
      this.isVisible = val;
    }
  },
  methods: {
    onClose() {
      if (this.autoClose) {
        this.isVisible = true;
      } else {
        this.$emit("close");
      }
    }
  }
};
</script>
