import Vue from "vue";
import VueRouter from "vue-router";
import InstalationView from "@/views/pages/components/Instalation";
import GridView from "@/views/pages/components/Grid";
import ButtonsView from "@/views/pages/components/Buttons";
import BadgesView from "@/views/pages/components/Badges";
import CardsView from "@/views/pages/components/Cards";
import MenusView from "@/views/pages/components/Menus";
import NavbarView from "@/views/pages/components/Navbar";
import IconsView from "@/views/pages/components/Icons";
import FormsView from "@/views/pages/components/Forms";
import IntroView from "@/views/pages/Intro";

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
