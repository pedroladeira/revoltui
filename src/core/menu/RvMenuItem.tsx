import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	url?: string;
	active?: boolean;
	vertical?: boolean;
	onClick?(): void;
}

export class RvMenuItem extends Component<IProps> {

	get mainClassNames(): string {
		const { active, vertical, className } = this.props;

		return classNames(className, [
			'mx-1 px-3 py-2',
			'rounded-md',
			'cursor-pointer',
			'text-sm font-medium',
			'focus:outline-none focus:text-white focus:bg-gray-700',
		],
			{
				'text-white bg-gray-900': active,
				'w-full mt-1': vertical
			});
	}

	render(): ReactNode {
		const { url, children, onClick } = this.props;
		return (<>{url ? <a onClick={onClick} className={this.mainClassNames} href={url}>{children}</a>
			: <span onClick={onClick} className={this.mainClassNames}>{children}</span>
		}
		</>)
	}
}
