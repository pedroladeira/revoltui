import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	onClick?(): void;
}

export class RvDropdownItem extends Component<IProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, [
			'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
		]);
	}

	render(): ReactNode {
		const { onClick, children } = this.props;
		return (<div className={this.mainClassNames} onClick={onClick}>
			{children}
		</div>
		);
	}
}
