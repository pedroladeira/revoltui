import Button from "@/components/Button.vue";
import LayoutAdmin from "@/components/LayoutAdmin.vue";
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
import Badge from "@/components/Badge.vue";
import Menu from "@/components/Menu.vue";
import MenuItem from "@/components/MenuItem.vue";
import Icon from "@/components/Icon.vue";
import Select from "@/components/Select.vue";
import SelectItem from "@/components/SelectItem.vue";
import Input from "@/components/Input.vue";
import Table from "@/components/Table.vue";
import Header from "@/components/Header.vue";

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
    Vue.component(Select.name, Select);
    Vue.component(SelectItem.name, SelectItem);
    Vue.component(Input.name, Input);
    Vue.component(Table.name, Table);
    Vue.component(Header.name, Header);
  }
};
