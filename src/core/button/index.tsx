import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
	onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export class RvButton extends Component<IProps> {

	get mainClassNames(): string {
		return classNames([
			'flex',
			'items-center',
			'justify-center',
			'px-1 py-1 md:py-2 md:px-5',
			'border border-transparent',
			'text-base',
			'font-medium',
			'rounded-md',
			'text-white',
			'bg-indigo-600 hover:bg-indigo-500',
			'focus:outline-none focus:shadow-outline',
			'transition duration-150 ease-in-out'
		]);
	}
	render(): ReactNode {
		const { onClick, children } = this.props;
		return (
			<button type="submit" className={this.mainClassNames}
				onClick={onClick}>
				{children}
			</button>
		)
	}
}
