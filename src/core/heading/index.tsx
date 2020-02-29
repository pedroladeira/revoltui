import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { Colors, TxtColor } from '../../theme';

interface IProps {
	h?: 1 | 2 | 3 | 4 | 5 | 6;
	color?: Colors;
}

export class RvHeading extends Component<IProps> {

	get mainClassNames(): string {
		const { h, color } = this.props;

		return classNames({
			'text-3xl': !h || h === 1,
			'text-2xl': h === 2,
			'text-xl': h === 3,
			'text-lg': h === 4,
			'text-md': h === 5,
			'text-sm': h === 6
		},
			color ? TxtColor[color] : 'text-gray-900',
			[
				'font-semibold',
				'leading-tight'
			]);
	}

	get headerComponent(): ReactNode {
		const { h, children } = this.props;

		const HeadComponent = `h${h || 1}` as keyof JSX.IntrinsicElements;

		return (<HeadComponent className={this.mainClassNames}>{children}</HeadComponent>);
	}

	render(): ReactNode {
		return (<>{this.headerComponent}</>)
	}
}
