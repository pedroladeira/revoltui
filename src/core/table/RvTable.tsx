import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	norounded?: boolean;
}

export class RvTable extends Component<IProps> {

	get mainClassNames(): string {
		const { norounded, className } = this.props;

		return classNames(className, {
			'rounded-md': !norounded
		}, [
			'flex flex-col'
		]);
	}
	render(): ReactNode {
		const { children } = this.props;
		return (
			<div className={this.mainClassNames}>
				<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
					<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
						<table className="min-w-full">
							{children}
						</table>
					</div>
				</div>
			</div>
		)
	}
}
