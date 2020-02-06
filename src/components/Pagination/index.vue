<template>
  <div class="v-pagination flex">
    <v-button @click="prevPage">
      <slot name="btn-prev-content" />
    </v-button>
    <v-button v-if="showFirstNumber" @click="selectFirstPage(1)">
      {{ "1" }}
    </v-button>
    <span v-if="showFirstNumber">...</span>
    <v-button
      v-for="(p, i) in getVisibleNumbers"
      :key="i"
      :color="currPage === p ? 'primary' : null"
      @click="selectPage(p)"
      >{{ p }}</v-button
    >
    <span v-if="showLastNumber">...</span>
    <v-button v-if="showLastNumber" @click="selectLastPage(total)">
      {{ total }}
    </v-button>
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
  computed: {
    getVisibleNumbers() {
      const numbers = [];
      const middle = Math.ceil(this.total / 2);
      if (this.currPage <= middle) {
        for (let i = 1; i <= middle + 1; i++) {
          numbers.push(i);
        }
      } else {
        for (let i = middle; i <= this.total; i++) {
          numbers.push(i);
        }
      }
      return numbers;
    },
    showFirstNumber() {
      return this.currPage > Math.ceil(this.total / 2);
    },
    showLastNumber() {
      return this.currPage <= Math.ceil(this.total / 2);
    }
  },
  data() {
    return {
      currPage: 1,
      maxVisible: 7,
      showFirst: false,
      showLast: false
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
