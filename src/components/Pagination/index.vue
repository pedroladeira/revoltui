<template>
  <div class="v-pagination flex">
    <v-button @click="prevPage">
      <slot name="btn-prev-content" />
    </v-button>
    <template v-for="(p, i) in getVisibleNumbers">
      <v-button
        v-if="p.val && !p.sep"
        :key="i"
        :color="currPage === p.val ? 'primary' : null"
        @click="selectPage(p.val)"
        >{{ p.val }}</v-button
      >
    </template>
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
    visible: {
      type: Number,
      required: false,
      default: 7
    },
    selected: {
      type: Number,
      required: false,
      default: null
    }
  },
  computed: {
    getVisibleNumbers() {
      const values = [];
      let start = 1;
      let end = this.visible;
      if (this.currPage >= this.visible - 2) {
        start = this.currPage - this.visible + 3;
      }
      end = this.visible + start;
      if (end > this.total) {
        end = this.total + 1;
        start = this.total - this.visible + 1;
      }
      for (let i = start; i < end; i++) {
        values.push({
          val: i
        });
      }
      return values;
    },
    isFirstSeparatorVisible() {
      return this.currPage > 3;
    },
    isLastSeparatorVisible() {
      return this.currPage < this.total - 3;
    }
  },
  data() {
    return {
      currPage: 1,
      maxVisible: 7
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
    },
    selectFirstPage(page) {
      this.currPage = page;
      this.onChange();
    },
    selectLastPage(page) {
      this.currPage = page;
      this.onChange();
    }
  }
};
</script>
