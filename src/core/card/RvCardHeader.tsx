import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

export class RvCardHeader extends Component<{}> {

	get mainClassNames(): string {
		return classNames([
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
