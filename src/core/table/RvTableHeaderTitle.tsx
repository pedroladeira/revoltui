import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	align?: 'left' | 'center' | 'right' | 'justify';
}

export class RvTableHeaderTitle extends Component<IProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, [
			'px-6 py-3',
			'border-b border-gray-200',
			'bg-gray-50',
			'text-left text-xs leading-4 font-medium text-gray-500 uppercase',
			'tracking-wider'
		]);
	}

	render(): ReactNode {
		const { align, children } = this.props;
		return (
			<th align={align} className={this.mainClassNames}>
				{children}
			</th>
		)
	}
}
