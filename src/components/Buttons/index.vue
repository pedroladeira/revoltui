<template>
	<button class="v-button py-1 px-2" :class="[getColorClass, getShadowClass]" @click="onClick">
		<v-icon v-if="icon && !iconRight" class="mr-2">{{ icon }}</v-icon>
		<slot></slot>
		<v-icon v-if="icon && iconRight" class="ml-2">{{ icon }}</v-icon>
	</button>
</template>

<script>
export default {
	name: "v-button",
	props: {
		color: {
			required: false,
			type: String,
			default: null
		},
		icon: {
			required: false,
			type: String,
			default: null
		},
		iconRight: {
			required: false,
			type: Boolean,
			default: false
		},
		noShadow: {
			required: false,
			type: Boolean,
			default: false
		}
	},
	computed: {
		getColorClass() {
			if (
				[
					"primary",
					"secondary",
					"info",
					"success",
					"danger",
					"warning"
				].indexOf(this.color) > -1
			) {
				return "v-button-" + this.color;
			}
			return "";
		},
		getShadowClass() {
			if (this.noShadow) {
				return "v-button-noshadow";
			}
			return "";
		}
	},
	methods: {
		onClick() {
			this.$emit("click");
		}
	}
};
</script>
