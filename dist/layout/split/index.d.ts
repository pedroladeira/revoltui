import { Component, ReactNode } from 'react';
import { Colors } from '../../theme';
interface IProps {
    color?: Colors;
    left?: ReactNode;
}
export declare class RvLayoutSplit extends Component<IProps> {
    get mainClassNames(): string;
    get leftClassNames(): string;
    render(): ReactNode;
}
export {};
