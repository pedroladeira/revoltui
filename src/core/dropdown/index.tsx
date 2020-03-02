import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { Colors, TxtColor } from '../../theme';

export class RvDropdown extends Component {

	get mainClassNames(): string {
		const { } = this.props;

		return classNames([
			''
		]);
	}

	render(): ReactNode {
		return (
			<div className="ml-3 relative">
				<div>
					<button className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid">
						<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
					</button>
				</div>
				<div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
					<div className="py-1 rounded-md bg-white shadow-xs">
						<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
						<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
						<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
					</div>
				</div>
			</div>
		);
	}
}
