import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

export class RvCardBody extends Component<{}> {

	get mainClassNames(): string {
		return classNames([
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
