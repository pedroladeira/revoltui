<template>
  <div
    @click="toggleList"
    :class="[getVisibleList]"
    class="v-select cursor-pointer"
  >
    <div class="v-select__selection">
      <span>{{ getSelectedText }}</span>
    </div>
    <div class="v-select__options">
      <slot @click="onSelectItem"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    color: {
      required: false,
      type: String,
      default: null
    },
    placeholder: {
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
        return "v-select--" + this.color;
      }
      return "";
    },
    getSelectedText() {
      if (this.selectedItem) {
        return this.selectedItem;
      }
      if (this.placeholder) {
        return this.placeholder;
      }
      return "";
    },
    getVisibleList() {
      return this.listOpen ? "v-select--open" : "";
    }
  },
  data() {
    return {
      listOpen: false,
      selectedItem: undefined
    };
  },
  mounted() {
    this.$children.forEach(child => {
      child.$on("click", this.onSelectItem);
    });
  },
  methods: {
    toggleList() {
      this.listOpen = !this.listOpen;
    },
    onSelectItem(data) {
      console.log(data);
      this.selectedItem = data;
    }
  }
};
</script>
