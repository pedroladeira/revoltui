import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';

interface IProps {
	size?: 'sm' | 'md' | 'lg';
	name?: boolean
}

export class RvIcon extends Component<IProps> {

	get mainClassNames(): string {
		const { name } = this.props;

		return classNames('fas fa-' + name);
	}
	render(): ReactNode {
		return (
			<i className={this.mainClassNames}></i>
		)
	}
}
