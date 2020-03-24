import React, { Component, ReactNode, Children } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	toggle: ReactNode;
	open: boolean;
}

export class RvDropdown extends Component<IProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className);
	}

	get itemsClassNames(): string {
		const { open } = this.props;

		return classNames('origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10', {
			'hidden': !open
		});
	}

	render(): ReactNode {
		const { toggle, children } = this.props;
		return (
			<div className="ml-3 relative">
				<div>
					{toggle}
				</div>
				{Children.count(children) > 0 &&
					<div className={this.itemsClassNames}>
						<div className="py-1 rounded-md bg-white shadow-xs">
							{children}
						</div>
					</div>
				}
			</div>
		);
	}
}
