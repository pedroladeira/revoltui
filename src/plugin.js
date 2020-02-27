import Button from "@/components/Buttons";
import ButtonGroup from "@/components/Buttons/Group";
import Badge from "@/components/Badges";
import Card from "@/components/Cards";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menus";
import MenuItem from "@/components/Menus/Item";
import Select from "@/components/Select";
import SelectItem from "@/components/Select/Item";
import { Input } from "@/components/Forms/index.js";
import Table from "@/components/Table";
import TableRow from "@/components/Table/Row";
import TableColumn from "@/components/Table/Column";
import Header from "@/components/Header";
import { LayoutAdmin, LayoutCenter } from "@/components/Layouts";
import Icon from "@/components/Icons";
import List from "@/components/List";
import ListItem from "@/components/List/Item";
import Dropdown from "@/components/Dropdown";
import Notification from "@/components/Notifications";
import Spacer from "@/components/Spacer";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import Calendar from "@/components/Advanced/Calendar";

// Import styles
import "../scss/main.scss";

export default {
	install(Vue) {
		// import components
		Vue.component(Button.name, Button);
		Vue.component(ButtonGroup.name, ButtonGroup);
		Vue.component(LayoutAdmin.name, LayoutAdmin);
		Vue.component(LayoutCenter.name, LayoutCenter);
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
		Vue.component(TableRow.name, TableRow);
		Vue.component(TableColumn.name, TableColumn);
		Vue.component(Header.name, Header);
		Vue.component(List.name, List);
		Vue.component(ListItem.name, ListItem);
		Vue.component(Dropdown.name, Dropdown);
		Vue.component(Notification.name, Notification);
		Vue.component(Spacer.name, Spacer);
		Vue.component(Pagination.name, Pagination);
		Vue.component(Loading.name, Loading);
		// import advanced components
		Vue.component(Calendar.name, Calendar);
	}
};
