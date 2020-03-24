import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvDropdownSeparator extends Component<{} & HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, [
			'border-t border-gray-200'
		]);
	}

	render(): ReactNode {
		return (
			<div className={this.mainClassNames}></div>
		);
	}
}
