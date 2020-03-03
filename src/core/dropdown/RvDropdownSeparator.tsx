import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

export class RvDropdownSeparator extends Component {

	get mainClassNames(): string {
		return classNames([
			'border-t border-gray-200'
		]);
	}

	render(): ReactNode {
		return (
			<div className={this.mainClassNames}></div>
		);
	}
}
