import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvPagination extends Component<{} & HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, 'relative z-0 inline-flex shadow-sm');
	}

	render(): ReactNode {
		const { children } = this.props;
		return (<span className={this.mainClassNames}>
			{children}
		</span>);
	}
}
