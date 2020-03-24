import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    url?: string;
    active?: boolean;
    vertical?: boolean;
    onClick?(): void;
}
export declare class RvMenuItem extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
