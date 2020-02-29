import { Component, ReactNode } from 'react';
import { Colors } from '../../theme';
interface IProps {
    title?: string | ReactNode;
    color?: Colors;
    fluid?: boolean;
}
export declare class RvNavbar extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
