<template>
  <table class="v-table" :class="[getBorderedClass, getStripedClass, getHoverClass]">
    <thead>
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
      <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "v-table",
  props: ["heads", "bordered", "striped", "hover"],
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
