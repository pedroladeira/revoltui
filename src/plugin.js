import Button from "@/components/Button.vue";
import LayoutAdmin from "@/components/LayoutAdmin.vue";
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
import Badge from "@/components/Badge.vue";
import Menu from "@/components/Menu.vue";
import MenuItem from "@/components/MenuItem.vue";
import Icon from "@/components/Icon.vue";
import "@/assets/scss/main.scss";

export default {
  install(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(LayoutAdmin.name, LayoutAdmin);
    Vue.component(Navbar.name, Navbar);
    Vue.component(Card.name, Card);
    Vue.component(Badge.name, Badge);
    Vue.component(Menu.name, Menu);
    Vue.component(MenuItem.name, MenuItem);
    Vue.component(Icon.name, Icon);
  }
};
