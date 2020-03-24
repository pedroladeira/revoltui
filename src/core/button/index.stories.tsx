import * as React from 'react';
import { RvButton, ThemeColors } from '../../index';

export default {
	title: 'Button',
	component: RvButton
};

export const Default = () => <RvButton>Hello RvButton</RvButton>;
export const Secondary = () => <RvButton color={ThemeColors.secondary}>Hello RvButton</RvButton>;
export const Danger = () => <RvButton color={ThemeColors.danger}>Hello RvButton</RvButton>;
export const Info = () => <RvButton color={ThemeColors.info}>Hello RvButton</RvButton>;
export const Primary = () => <RvButton color={ThemeColors.primary}>Hello RvButton</RvButton>;
export const Success = () => <RvButton color={ThemeColors.success}>Hello RvButton</RvButton>;
export const Warning = () => <RvButton color={ThemeColors.warning}>Hello RvButton</RvButton>;
