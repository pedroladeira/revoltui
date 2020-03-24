import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	title?: string | ReactNode;
	fluid?: boolean;
	vertical?: boolean;
}

export class RvMenu extends Component<IProps> {

	get mainClassNames(): string {
		const { vertical, className } = this.props;

		return classNames(className, [
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
