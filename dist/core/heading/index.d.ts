import { Component, ReactNode } from 'react';
import { Colors } from '../../theme';
interface IProps {
    h?: 1 | 2 | 3 | 4 | 5 | 6;
    color?: Colors;
}
export declare class RvHeading extends Component<IProps> {
    get mainClassNames(): string;
    get headerComponent(): ReactNode;
    render(): ReactNode;
}
export {};
