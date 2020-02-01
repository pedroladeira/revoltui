<template>
  <div class="v-pagination flex">
    <v-button @click="prevPage">
      <slot name="btn-prev-content" />
    </v-button>
    <v-button
      v-for="(p, i) in total"
      :key="i"
      :color="currPage === p ? 'primary' : null"
      @click="selectPage(p)"
      >{{ p }}</v-button
    >
    <v-button @click="nextPage">
      <slot name="btn-next-content" />
    </v-button>
  </div>
</template>

<script>
export default {
  name: "v-pagination",
  props: {
    page: {
      type: Number,
      required: false,
      default: 1
    },
    total: {
      type: Number,
      required: false,
      default: 1
    },
    selected: {
      type: Number,
      required: false,
      default: null
    }
  },
  computed: {},
  data() {
    return {
      currPage: 1
    };
  },
  watch: {
    selected(val) {
      this.currPage = val;
    }
  },
  mounted() {
    this.currPage = this.selected;
  },
  methods: {
    onChange() {
      this.$emit("change", this.currPage);
    },
    selectPage(page) {
      this.currPage = page;
      this.onChange();
    },
    nextPage() {
      if (this.currPage < this.total) {
        this.currPage++;
        this.onChange();
      }
    },
    prevPage() {
      if (this.currPage > 1) {
        this.currPage--;
        this.onChange();
      }
    }
  }
};
</script>
