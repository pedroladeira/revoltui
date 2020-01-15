import Vue from "vue";
import VueRouter from "vue-router";
import Buttons from "@/examples/Buttons";
import Badges from "@/examples/Badges";
import Cards from "@/examples/Cards";

Vue.use(VueRouter);

const routes = [
  {
    name: "Buttons",
    path: "/buttons",
    component: Buttons
  },
  {
    name: "Badges",
    path: "/badges",
    component: Badges
  },
  {
    name: "Cards",
    path: "/cards",
    component: Cards
  }
];

export default new VueRouter({
  routes // short for `routes: routes`
});
