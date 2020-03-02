import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { RvContainer } from '../../layout/container';

interface IProps {
	title?: string | ReactNode;
	fluid?: boolean;
}

export class RvNavbarContainer extends Component<IProps> {

	get mainClassNames(): string {
		return classNames('max-w-7xl mx-auto px-2 sm:px-6 lg:px-8');
	}

	render(): ReactNode {
		const { fluid, children } = this.props;
		return (
			<div className={this.mainClassNames}>
				<RvContainer center={!fluid}>
					<div className="relative flex items-center justify-between h-16">
						{children}
					</div>
				</RvContainer>
			</div>
		)
	}
}
