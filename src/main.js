import Vue from "vue";
import App from "./App.vue";
import Plugin from "./plugin.js";
import "@/assets/scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.use(Plugin);

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount("#app");
