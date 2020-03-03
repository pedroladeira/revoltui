import { Component, ReactNode } from 'react';
import { Colors } from '../../theme';
interface IProps {
    color?: Colors;
}
export declare class RvLayoutSidebar extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
