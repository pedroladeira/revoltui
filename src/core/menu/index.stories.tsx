import * as React from 'react';
import {
	RvMenu,
	RvMenuItem
} from '../../index';

export default {
	title: 'Menu',
	component: RvMenu
};

export const Default = () => <RvMenu>
	<RvMenuItem>Item One</RvMenuItem>
	<RvMenuItem>Item Two</RvMenuItem>
</RvMenu>;
