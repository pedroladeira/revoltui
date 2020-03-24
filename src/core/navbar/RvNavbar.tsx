import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { Colors as ThemeColors, TxtColor, BgColor } from '../../theme';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	title?: string | ReactNode;
	color?: ThemeColors;
	noshadow?: boolean;
}

export class RvNavbar extends Component<IProps> {

	get mainClassNames(): string {
		const { color, noshadow, className } = this.props;

		return classNames(className, {
			'shadow': !noshadow
		},
			color ? BgColor[color] : BgColor.default,
			color ? TxtColor[color] : TxtColor.default
		);
	}

	render(): ReactNode {
		const { children } = this.props;
		return (
			<nav className={this.mainClassNames}>
				{children}
			</nav>
		)
	}
}
