<template>
  <table class="v-table" :class="[getBorderedClass]">
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
  props: ["heads", "bordered"],
  computed: {
    getBorderedClass() {
      return this.bordered ? "v-table--bordered" : "";
    }
  }
};
</script>
