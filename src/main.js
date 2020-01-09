import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import Plugin from "./plugin.js";
import "@/../scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import TablePropsItem from "@/views/pages/partials/TablePropsItem";

Vue.component("TablePropsItem", TablePropsItem);

Vue.use(Plugin);

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
