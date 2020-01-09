import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import Plugin from "./plugin.js";
import "@/../scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import TablePropsDocsItem from "@/views/pages/partials/TablePropsDocsItem";
import TablePropsEventsItem from "@/views/pages/partials/TablePropsEventsItem";

Vue.component("TablePropsDocsItem", TablePropsDocsItem);
Vue.component("TablePropsEventsItem", TablePropsEventsItem);

Vue.use(Plugin);

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
