import * as React from 'react';
import {
	RvDropdown,
	RvButton,
	RvDropdownItem,
	RvDropdownSeparator
} from '../../index';

export default {
	title: 'Dropdown',
	component: RvDropdown
};

var toggleStatus: boolean = true;

export const Default = () => <span className="absolute">
	<RvDropdown open={toggleStatus}
		toggle={
			<RvButton>Dropdown Button</RvButton>
		}>
		<RvDropdownItem>Item one</RvDropdownItem>
		<RvDropdownItem>Item two</RvDropdownItem>
		<RvDropdownSeparator />
		<RvDropdownItem>Item tree</RvDropdownItem>
	</RvDropdown>
</span>;
