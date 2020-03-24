import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvCardHeaderTitle extends Component<{} & HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, [
			'text-lg leading-6 font-medium text-gray-900'
		]);
	}

	render(): ReactNode {
		const { children } = this.props;
		return (
			<h3 className={this.mainClassNames}>
				{children}
			</h3>
		)
	}
}
