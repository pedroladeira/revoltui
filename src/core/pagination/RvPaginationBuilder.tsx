import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import {
	RvIcon,
	RvPagination,
	RvPaginationButton
} from '..';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	current?: number;
	total: number;
	onChange?(page: number): void;
}

export class RvPaginationBuilder extends Component<IProps> {

	get mainClassNames(): string {
		const { className } = this.props;

		return classNames(className, 'relative z-0 inline-flex shadow-sm');
	}

	renderButtons() {
		const { total, onChange } = this.props;
		for (let i = 1; i < total; i++) {
			<RvPaginationButton onClick={(): void => onChange && onChange(i)}>{i}</RvPaginationButton>
		}
	}

	render(): ReactNode {
		return (<RvPagination className={this.mainClassNames}>
			<RvPaginationButton firstChild>
				<RvIcon name="chevron-left" />
			</RvPaginationButton>
			{this.renderButtons}
			<RvPaginationButton lastChild>
				<RvIcon name="chevron-right" />
			</RvPaginationButton>
		</RvPagination>);
	}
}
