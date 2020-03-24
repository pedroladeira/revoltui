import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	norounded?: boolean
}

export class RvCard extends Component<IProps> {

	get mainClassNames(): string {
		const { norounded, className } = this.props;

		return classNames(className, {
			'sm:rounded-lg': !norounded
		}, [
			'shadow overflow-hidden'
		]);
	}
	render(): ReactNode {
		const { children } = this.props;
		return (
			<div className={this.mainClassNames}>
				{children}
			</div>
		)
	}
}
