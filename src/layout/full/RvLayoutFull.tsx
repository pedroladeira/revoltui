import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvLayoutFull extends Component<HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, [
			'w-full h-screen overflow-hidden'
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
