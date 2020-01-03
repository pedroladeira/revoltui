import Vue from "vue";
import VueRouter from "vue-router";
import IntroView from "@/views/components/Intro";
import InstalationView from "@/views/components/Instalation";
import GridView from "@/views/components/Grid";
import ButtonsView from "@/views/components/Buttons";
import BadgesView from "@/views/components/Badges";
import CardsView from "@/views/components/Cards";
import MenusView from "@/views/components/Menus";
import NavbarView from "@/views/components/Navbar";
import IconsView from "@/views/components/Icons";
import FormsView from "@/views/components/Forms";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: IntroView
  },
  {
    path: "/instalation",
    component: InstalationView
  },
  {
    path: "/grid",
    component: GridView
  },
  {
    path: "/buttons",
    component: ButtonsView
  },
  {
    path: "/badges",
    component: BadgesView
  },
  {
    path: "/cards",
    component: CardsView
  },
  {
    path: "/menus",
    component: MenusView
  },
  {
    path: "/navbar",
    component: NavbarView
  },
  {
    path: "/icons",
    component: IconsView
  },
  {
    path: "/Forms",
    component: FormsView
  }
];

export default new VueRouter({
  routes // short for `routes: routes`
});
