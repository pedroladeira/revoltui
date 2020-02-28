import React, { Component, ReactNode } from 'react';
interface IProps {
    onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}
export declare class RvButton extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
