import { Component, ReactNode } from 'react';
import { Colors as ThemeColors } from '../../theme';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    color?: ThemeColors;
    left?: ReactNode;
}
export declare class RvLayoutSplit extends Component<IProps> {
    get mainClassNames(): string;
    get leftClassNames(): string;
    render(): ReactNode;
}
export {};
