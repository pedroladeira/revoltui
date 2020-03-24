import * as React from 'react';
import {
	RvInput,
	RvInputControl,
	RvButton,
	RvIcon,
	ThemeColors
} from '../../index';

export default {
	title: 'Input',
	component: RvInput
};

export const Default = () => <div>
	<RvInput placeholder="Type something..." />
</div>;

export const InputControl = () => <div>
	<RvInputControl title="Example label">
		<RvInput placeholder="Type something..." />
	</RvInputControl>
</div>;

export const LoginForm = () => <div className="max-w-sm">
	<RvInputControl title="Username" className="mb-3">
		<RvInput placeholder="Type something..." type="text" value="admin" />
	</RvInputControl>
	<RvInputControl title="Password" className="mb-3">
		<RvInput placeholder="Type something..." type="password" value="admin" />
	</RvInputControl>
	<div className="flex justify-end">
		<RvButton color={ThemeColors.primary} size="sm">
			Login&nbsp;<RvIcon name="sign-in-alt" />
		</RvButton>
	</div>
</div>;
