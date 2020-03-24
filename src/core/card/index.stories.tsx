import * as React from 'react';
import {
	RvCard,
	RvCardHeader,
	RvCardHeaderTitle,
	RvCardHeaderSubTitle,
	RvCardBody,
	ThemeColors
} from '../../index';
import { RvButton } from '../button';

export default {
	title: 'Card',
	component: RvCard
};

export const Default = () => <RvCard>
	<RvCardHeader>
		<RvCardHeaderTitle>Simple Header</RvCardHeaderTitle>
		<RvCardHeaderSubTitle>Simple Header</RvCardHeaderSubTitle>
	</RvCardHeader>
	<RvCardBody>
		Hello RvCard Body
	</RvCardBody>
</RvCard>;

export const Post = () => <div className="max-w-md">
	<RvCard>
		<RvCardBody>
			This is a example of a text, and bla bla
			<div className="flex justify-end">
				<RvButton size="sm" color={ThemeColors.primary}>Read More</RvButton>
			</div>
		</RvCardBody>
	</RvCard>
</div>;
