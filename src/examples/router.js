import Vue from "vue";
import VueRouter from "vue-router";
import Buttons from "@/examples/Buttons";
import Badges from "@/examples/Badges";
import Cards from "@/examples/Cards";
import Navbar from "@/examples/Navbar";
import Menus from "@/examples/Menus";
import Select from "@/examples/Select";
import Header from "@/examples/Header";
import Tables from "@/examples/Tables";
import Layouts from "@/examples/Layouts";
import Icons from "@/examples/Icons";
import List from "@/examples/List";

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
  },
  {
    name: "Navbar",
    path: "/navbar",
    component: Navbar
  },
  {
    name: "Menus",
    path: "/menus",
    component: Menus
  },
  {
    name: "Select",
    path: "/select",
    component: Select
  },
  {
    name: "Header",
    path: "/header",
    component: Header
  },
  {
    name: "Tables",
    path: "/tables",
    component: Tables
  },
  {
    name: "Layouts",
    path: "/layouts",
    component: Layouts
  },
  {
    name: "Icons",
    path: "/icons",
    component: Icons
  },
  {
    name: "List",
    path: "/list",
    component: List
  }
];

export default new VueRouter({
  routes // short for `routes: routes`
});
