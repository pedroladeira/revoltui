import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvCardHeader extends Component<{} & HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, [
			'px-4 py-5 border-b border-gray-200 sm:px-6'
		]);
	}
	render(): ReactNode {
		const { children } = this.props;
		return (
			<div className={this.mainClassNames}>
				{children}
			</div>
		)
	}
}
