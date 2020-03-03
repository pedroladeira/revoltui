import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

interface IDefaultProps {
	type: 'text' | 'number' | 'textarea' | 'email';
}

interface IProps extends IDefaultProps {
	value?: string | number;
	size?: 'sm' | 'md' | 'lg';
	norounded?: boolean,
	placeholder?: string;
	onChange?(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

export class RvInput extends Component<IProps> {
	static defaultProps: IDefaultProps = {
		type: 'text'
	}

	get mainClassNames(): string {
		const { norounded } = this.props;

		return classNames([
			'appearance-none relative block w-full',
			'px-3 py-2',
			'border border-gray-300',
			'placeholder-gray-500 text-gray-900 sm:text-sm sm:leading-5',
			'focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10'
		], {
			'rounded-md ': !norounded
		});
	}

	render(): ReactNode {
		const { type, value, onChange, placeholder } = this.props;
		return (<>
			{type === 'textarea' ? <textarea className={this.mainClassNames}
				value={value}
				onChange={onChange}
				placeholder={placeholder}></textarea>
				:
				<input type={type}
					className={this.mainClassNames}
					onChange={onChange}
					placeholder={placeholder} />
			}
		</>)
	}
}
