import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvInputLabel extends Component<{} & HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, [
			'block text-sm leading-5 font-medium text-gray-700 mb-1'
		]);
	}

	render(): ReactNode {
		const { children } = this.props;
		return (<label className={this.mainClassNames}>{children}</label>)
	}
}
