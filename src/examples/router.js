import Vue from "vue";
import VueRouter from "vue-router";
import Buttons from "@/examples/Buttons";
import Badges from "@/examples/Badges";

Vue.use(VueRouter);

const routes = [
  {
    path: "/buttons",
    component: Buttons
  },
  {
    path: "/badges",
    component: Badges
  }
];

export default new VueRouter({
  routes // short for `routes: routes`
});
