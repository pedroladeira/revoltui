import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvTableHeader extends Component<{} & HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className);
	}

	render(): ReactNode {
		const { children } = this.props;
		return (
			<thead className={this.mainClassNames}>
				<tr>
					{children}
				</tr>
			</thead>
		)
	}
}
