import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { RvInputLabel } from './RvInputLabel';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	title?: string;
}

export class RvInputControl extends Component<IProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, [
			'w-full'
		]);
	}

	render(): ReactNode {
		const { title, children } = this.props;
		return (
			<div className={this.mainClassNames}>
				{title && <RvInputLabel>{title}</RvInputLabel>}
				{children}
			</div>
		)
	}
}
