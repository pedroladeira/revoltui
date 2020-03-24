import { Component, ReactNode } from 'react';
import { Colors as ThemeColors } from '../../theme';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    h?: 1 | 2 | 3 | 4 | 5 | 6;
    color?: ThemeColors;
}
export declare class RvHeading extends Component<IProps> {
    get mainClassNames(): string;
    get headerComponent(): ReactNode;
    render(): ReactNode;
}
export {};
