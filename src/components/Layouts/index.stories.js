import { storiesOf } from "@storybook/vue";
import LayoutAdmin from "./Admin.vue";

const stories = storiesOf("Layouts", module);
stories.add("Admin Layout", () => ({
	components: {
		vButton: LayoutAdmin
	},
	template: `<v-layout-admin>
	<template slot="header">
		<v-navbar title="Example" />
	</template>
	<template slot="left">
		<v-menu title="Default Menu">
			<v-menu-item>Item One</v-menu-item>
			<v-menu-item>Item Two</v-menu-item>
		</v-menu>
	</template>
Example
</v-layout-admin>`
}));
