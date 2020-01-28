<template>
  <div class="v-calendar">
    <v-hello-week :options="options" :theme="theme"></v-hello-week>
  </div>
</template>

<script>
export default {
  name: "v-calendar",
  props: {
    theme: {
      type: String,
      default: "v-calendar--revoltui"
    }
  },
  data() {
    return {
      options: {
        beforeCreateDay: data => {
          data.node.children = [data.node.children[0], "<div>hello</div>"];
          console.log("element", data.node);
          return data;
        }
      }
    };
  }
};
</script>
