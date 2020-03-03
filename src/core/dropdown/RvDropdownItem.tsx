import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
	title: string;
	href: string;
}

export class RvDropdownItem extends Component<IProps> {

	get mainClassNames(): string {
		const { } = this.props;

		return classNames([
			'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
		]);
	}

	render(): ReactNode {
		const { title, href } = this.props;
		return (
			<a href={href} className={this.mainClassNames}>
				{title}
			</a>
		);
	}
}
