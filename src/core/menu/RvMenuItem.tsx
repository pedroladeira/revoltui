import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
	url?: string;
	active?: boolean;
	vertical?: boolean;
}

export class RvMenuItem extends Component<IProps> {

	get mainClassNames(): string {
		const { active, vertical } = this.props;

		return classNames([
			'mx-1 px-3 py-2',
			'rounded-md',
			'cursor-pointer',
			'text-sm font-medium ',
			'hover:text-white hover:bg-gray-700',
			'focus:outline-none focus:text-white focus:bg-gray-700',
		], {
			'text-white bg-gray-900': active,
			'text-gray-300': !active,
			'w-full mt-1': vertical
		});
	}

	render(): ReactNode {
		const { url, children } = this.props;
		return (
			<a className={this.mainClassNames} href={url}>
				{children}
			</a>
		)
	}
}
