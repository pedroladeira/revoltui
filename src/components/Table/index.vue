<template>
  <div class="v-table">
    <div v-if="search" class="v-table__search">
      <v-input :placeholder="searchPlaceholder" v-model="query"></v-input>
    </div>
    <table :class="[getBorderedClass, getStripedClass, getHoverClass]">
      <thead v-if="heads">
        <tr>
          <th
            v-for="(h, i) in heads"
            :key="i"
            :class="{
              'text-left': i === 0
            }"
          >
            {{ h }}
          </th>
        </tr>
      </thead>
      <tbody>
        <slot v-bind:search="{ query }"></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "v-table",
  props: {
    heads: {
      type: Array,
      required: false,
      default: null
    },
    bordered: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    searchPlaceholder: {
      type: String,
      default: "Start type..."
    }
  },
  data() {
    return {
      query: ""
    };
  },
  computed: {
    getBorderedClass() {
      return this.bordered ? "v-table--bordered" : "";
    },
    getStripedClass() {
      return this.striped ? "v-table--striped" : "";
    },
    getHoverClass() {
      return this.hover ? "v-table--hover" : "";
    }
  }
};
</script>
