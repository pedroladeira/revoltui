import * as React from 'react';
import { RvBreadcrumbs } from './RvBreadcrumbs';
import { RvBreadcrumbItem } from './RvBreadcrumbItem';

export default {
	title: 'Breadcrumbs',
	component: RvBreadcrumbs
};

export const Default = () => <RvBreadcrumbs>
	<RvBreadcrumbItem>RevoltUi</RvBreadcrumbItem>
	<RvBreadcrumbItem>Breadcrumbs</RvBreadcrumbItem>
	<RvBreadcrumbItem isLast>Item One</RvBreadcrumbItem>
</RvBreadcrumbs>;

export const OneItem = () => <RvBreadcrumbs>
	<RvBreadcrumbItem isLast>RevoltUi</RvBreadcrumbItem>
</RvBreadcrumbs>;
