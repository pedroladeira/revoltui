<template>
  <div>
    Hello
    <v-calendar @select="onSelect"></v-calendar>
  </div>
</template>

<script>
export default {
  methods: {
    onSelect() {
      console.log("asdasdas");
    }
  }
};
</script>
