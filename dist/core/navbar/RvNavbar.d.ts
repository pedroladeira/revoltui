import { Component, ReactNode } from 'react';
import { Colors as ThemeColors } from '../../theme';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    title?: string | ReactNode;
    color?: ThemeColors;
    noshadow?: boolean;
}
export declare class RvNavbar extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
