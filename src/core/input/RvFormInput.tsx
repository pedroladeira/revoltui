import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
	title?: string;
}

export class RvFormInput extends Component<IProps> {

	get mainClassNames(): string {
		return classNames([
			'w-full'
		]);
	}

	render(): ReactNode {
		const { title, children } = this.props;
		return (
			<div className={this.mainClassNames}>
				{title &&
					<label className="block text-sm leading-5 font-medium text-gray-700 mb-1">{title}</label>
				}
				{children}
			</div>
		)
	}
}
