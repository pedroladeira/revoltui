import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { Colors, BgColor } from '../../theme';

interface IProps {
	color?: Colors;
	left?: ReactNode;
}

export class RvLayoutSplit extends Component<IProps> {

	get mainClassNames(): string {
		return classNames([
			'flex h-full'
		]);
	}

	get leftClassNames(): string {
		const { color } = this.props;

		return classNames([
			'w-64 hidden sm:block overflow-scroll'
		], color ? BgColor[color] : BgColor.default);
	}

	render(): ReactNode {
		const { left, children } = this.props;
		return (
			<div className={this.mainClassNames}>
				{left &&
					<div className={this.leftClassNames}>
						{left}
					</div>
				}
				<div className="flex-1 overflow-scroll">
					{children}
				</div>
			</div >
		)
	}
}
