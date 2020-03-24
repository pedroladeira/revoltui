import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
	size?: 'sm' | 'md' | 'lg';
	name?: string;
}

export class RvIcon extends Component<IProps> {

	get mainClassNames(): string {
		const { name, className } = this.props;

		return classNames(className, 'fas fa-' + name);
	}
	render(): ReactNode {
		return (
			<i className={this.mainClassNames}></i>
		)
	}
}
