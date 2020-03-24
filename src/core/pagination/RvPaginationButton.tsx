import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	firstChild?: boolean;
	lastChild?: boolean;
	onClick?(): void;
}

export class RvPaginationButton extends Component<IProps> {

	get mainClassNames(): string {
		const { className, firstChild, lastChild } = this.props;

		return classNames(className, [
			'relative inline-flex items-center',
			'px-4 py-2 -ml-px',
			'border border-gray-300 focus:border-blue-300',
			'bg-white active:bg-gray-100',
			'focus:z-10 focus:outline-none',
			'focus:shadow-outline-blue',
			'text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 active:text-gray-700',
			'transition ease-in-out duration-150',
		], {
			'rounded-l-md': firstChild,
			'rounded-r-md': lastChild
		});
	}

	render(): ReactNode {
		const { onClick, children } = this.props;
		return (<button type="button" onClick={(): void => onClick && onClick()} className={this.mainClassNames}>{children}</button>);
	}
}
