import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { Colors, TxtColor, TxtHoverColor, BgColor, BgHoverColor, BorderColor } from '../../theme';

interface IProps {
	size?: 'sm' | 'md' | 'lg';
	norounded?: boolean,
	onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
	color?: Colors;
}

export class RvButton extends Component<IProps> {

	get mainClassNames(): string {
		const { size, norounded, color } = this.props;

		return classNames({
			'px-3 py-1 md:px-4 md:py-2 font-medium': !size || size === 'md',
			'px-2 py-1 md:px-3 md:py-1': size === 'sm',
			'px-4 py-2 md:px-8 md:py-3 font-bold': size === 'lg',
			'rounded-md': !norounded
		},
			color ? BgColor[color] : BgColor.default,
			color ? BgHoverColor[color] : BgHoverColor.default,
			color ? TxtColor[color] : TxtColor.default,
			color ? TxtHoverColor[color] : TxtHoverColor.default,
			color ? BorderColor[color] : BorderColor.default,
			[
				'flex',
				'items-center',
				'justify-center',
				'border',
				'focus:z-10 focus:outline-none',
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
