import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

export class RvNavbarTitle extends Component<{} & HTMLBasicElementProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, 'flex-1 flex items-center justify-center sm:items-stretch sm:justify-start');
	}

	render(): ReactNode {
		const { children } = this.props;
		return (
			<div className={this.mainClassNames}>
				<div className="flex-shrink-0">
					<span className="block lg:hidden h-8 w-auto">
						{children}
					</span>
					<span className="hidden lg:block h-8 w-auto">
						{children}
					</span>
				</div>
			</div>
		)
	}
}
