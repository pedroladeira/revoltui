import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvCardBody extends Component<{} & HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;
		return classNames(className, [
			'bg-gray-50 px-4 py-5 sm:px-6'
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
