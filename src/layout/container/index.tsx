import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
	center?: boolean;
}

export class RvContainer extends Component<IProps> {

	get mainClassNames(): string {
		const { center } = this.props;

		return classNames('container', {
			'mx-auto': center
		});
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
