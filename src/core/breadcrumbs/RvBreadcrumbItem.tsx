import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
import { RvIcon } from '../icon';

interface IProps extends HTMLBasicElementProps {
	isLast?: boolean;
}

export class RvBreadcrumbItem extends Component<IProps> {

	get mainClassNames(): string {
		const { className, isLast } = this.props;

		return classNames(className, [
			'text-sm leading-5 text-gray-700 mr-2'
		], {
			'font-bold': isLast
		});
	}

	render(): ReactNode {
		const { isLast, children } = this.props;
		return (
			<span className={this.mainClassNames}>
				{children}
				{!isLast && <RvIcon className="ml-2" name="chevron-right" />}
			</span>
		)
	}
}
