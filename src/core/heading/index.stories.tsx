import * as React from 'react';
import {
	RvHeading
} from '../../index';

export default {
	title: 'Heading',
	component: RvHeading
};

export const Default = () => <div>
	<RvHeading>Heading H1</RvHeading>
	<RvHeading h={2}>Heading H2</RvHeading>
	<RvHeading h={3}>Heading H3</RvHeading>
	<RvHeading h={4}>Heading H4</RvHeading>
	<RvHeading h={5}>Heading H5</RvHeading>
	<RvHeading h={6}>Heading H6</RvHeading>
</div>;
