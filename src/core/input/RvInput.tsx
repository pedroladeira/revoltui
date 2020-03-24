import React, { FC } from 'react';
import classNames from 'classnames';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	norounded?: boolean;
}

export const RvInput: FC<IProps> = ({
	className,
	norounded,
	...otherProps
}: IProps) => {

	const mainClassNames = (): string => {
		return classNames(className, [
			'appearance-none relative block w-full',
			'px-3 py-2',
			'border border-gray-300',
			'placeholder-gray-500 text-gray-900 sm:text-sm sm:leading-5',
			'focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10'
		], {
			'rounded-md ': !norounded
		});
	};

	return (<>
		<input className={mainClassNames()} {...otherProps} />
	</>);
};
