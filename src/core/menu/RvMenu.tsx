import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
	title?: string | ReactNode;
	fluid?: boolean;
}

export class RvMenu extends Component<IProps> {

	get mainClassNames(): string {
		return classNames([
			'flex items-baseline'
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
