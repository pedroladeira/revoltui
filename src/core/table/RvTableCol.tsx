import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	align?: 'right' | 'center';
}

export class RvTableCol extends Component<IProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, [
			'px-6 py-4 whitespace-no-wrap border-b border-gray-200'
		]);
	}

	render(): ReactNode {
		const { align, children } = this.props;
		return (
			<td className={this.mainClassNames} align={align}>
				{children}
			</td>
		)
	}
}
