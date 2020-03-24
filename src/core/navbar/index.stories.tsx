import * as React from 'react';
import {
	RvNavbar,
	RvNavbarContainer,
	RvNavbarTitle,
	RvMenu,
	RvMenuItem,
	ThemeColors
} from '../../index';

export default {
	title: 'Navbar',
	component: RvNavbar
};

export const Default = () => <RvNavbar>
	<RvNavbarContainer>
		<RvNavbarTitle>
			Simple Navbar
		</RvNavbarTitle>
	</RvNavbarContainer>
</RvNavbar>;

export const Fluid = () => <RvNavbar>
	<RvNavbarContainer fluid>
		<RvNavbarTitle>
			Simple Navbar
		</RvNavbarTitle>
	</RvNavbarContainer>
</RvNavbar>;

export const WithMenu = () => <RvNavbar>
	<RvNavbarContainer fluid>
		<RvNavbarTitle>
			Simple Navbar
		</RvNavbarTitle>
		<RvMenu>
			<RvMenuItem>Item One</RvMenuItem>
			<RvMenuItem>Item Two</RvMenuItem>
		</RvMenu>
	</RvNavbarContainer>
</RvNavbar>;

export const SecundaryColor = () => <RvNavbar color={ThemeColors.secondary}>
	<RvNavbarContainer fluid>
		<RvNavbarTitle>
			Simple Navbar
		</RvNavbarTitle>
		<RvMenu>
			<RvMenuItem>Item One</RvMenuItem>
			<RvMenuItem>Item Two</RvMenuItem>
		</RvMenu>
	</RvNavbarContainer>
</RvNavbar>;
