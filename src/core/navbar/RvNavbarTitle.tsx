import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

export class RvNavbarTitle extends Component {

	get mainClassNames(): string {
		return classNames('flex-1 flex items-center justify-center sm:items-stretch sm:justify-start');
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
