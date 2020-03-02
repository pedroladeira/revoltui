import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
	title?: string | ReactNode;
	fluid?: boolean;
	vertical?: boolean;
}

export class RvMenu extends Component<IProps> {

	get mainClassNames(): string {
		const { vertical } = this.props;

		return classNames([
			'flex items-baseline'
		], {
			'flex-wrap px-1 pt-2 pb-3': vertical
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
