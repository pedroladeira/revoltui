import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { Colors, TxtColor, BgColor } from '../../theme';
import { RvContainer } from '../../layout/container';

interface IProps {
	title?: string | ReactNode;
	color?: Colors;
	fluid?: boolean;
}

export class RvNavbar extends Component<IProps> {

	get mainClassNames(): string {
		const { color } = this.props;

		return classNames(
			color ? BgColor[color] : BgColor.default,
			color ? TxtColor[color] : TxtColor.default
		);
	}

	render(): ReactNode {
		const { fluid, children } = this.props;
		return (
			<nav className={this.mainClassNames}>
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<RvContainer center={!fluid}>
						<div className="relative flex items-center justify-between h-16">
							{children}
						</div>
					</RvContainer>
				</div>
			</nav>
		)
	}
}
