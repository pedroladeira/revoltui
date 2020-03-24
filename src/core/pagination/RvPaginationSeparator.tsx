import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvPaginationSeparator extends Component<{} & HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, [
			'-ml-px px-4 py-2',
			'relative inline-flex items-center',
			'border border-gray-300',
			'bg-white',
			'text-sm leading-5 font-medium text-gray-700'
		]);
	}

	render(): ReactNode {
		return (<span className={this.mainClassNames}>...</span>);
	}
}
