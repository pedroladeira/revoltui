import React, { Component, ReactNode } from 'react';
interface IDefaultProps {
    type: 'text' | 'number' | 'textarea' | 'email';
}
interface IProps extends IDefaultProps {
    value?: string | number;
    size?: 'sm' | 'md' | 'lg';
    norounded?: boolean;
    placeholder?: string;
    onChange?(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}
export declare class RvInput extends Component<IProps> {
    static defaultProps: IDefaultProps;
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
