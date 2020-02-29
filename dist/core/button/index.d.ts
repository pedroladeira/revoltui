import React, { Component, ReactNode } from 'react';
import { Colors } from '../../theme';
interface IProps {
    size?: 'sm' | 'md' | 'lg';
    norounded?: boolean;
    onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    color?: Colors;
}
export declare class RvButton extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
