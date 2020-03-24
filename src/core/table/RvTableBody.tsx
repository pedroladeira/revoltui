import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvTableBody extends Component<{} & HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, 'bg-white');
	}
	render(): ReactNode {
		const { children } = this.props;
		return (
			<tbody className={this.mainClassNames}>
				{children}
			</tbody>
		)
	}
}
