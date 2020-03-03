import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

export class RvLayoutFull extends Component<{}> {

	get mainClassNames(): string {
		return classNames([
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
