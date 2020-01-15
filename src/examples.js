import Vue from "vue";
import App from "./examples/App.vue";
import router from "./examples/router.js";
import Plugin from "./plugin.js";
import "@/../scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.use(Plugin);

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
