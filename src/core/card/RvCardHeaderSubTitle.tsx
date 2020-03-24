import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvCardHeaderSubTitle extends Component<{} & HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, [
			'mt-1 text-sm leading-5 text-gray-500'
		]);
	}

	render(): ReactNode {
		const { children } = this.props;
		return (
			<p className={this.mainClassNames}>
				{children}
			</p>
		)
	}
}
