<template>
  <div class="v-calendar">
    <v-hello-week
      v-if="helloWeekCalendarIsLoaded"
      :options="options"
      :theme="theme"
    ></v-hello-week>
    <span v-else>
      The plugin
      <a href="https://github.com/pedroladeira/vue-hello-week" target="_blank"
        >VueHelloWeek</a
      >
      is not instaled!
    </span>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "v-calendar",
  props: {
    theme: {
      type: String,
      default: "v-calendar--revoltui"
    }
  },
  computed: {
    helloWeekCalendarIsLoaded() {
      return "v-hello-week" in Vue.options.components;
    }
  },
  data() {
    return {
      options: {
        beforeCreateDay: data => {
          return data;
        }
      }
    };
  }
};
</script>
