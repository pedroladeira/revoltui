import React, { Component, ReactNode } from 'react';
import { Colors as ThemeColors } from '../../theme';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    size?: 'sm' | 'md' | 'lg';
    norounded?: boolean;
    onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    color?: ThemeColors;
}
export declare class RvButton extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
