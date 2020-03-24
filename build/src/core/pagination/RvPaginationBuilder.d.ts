import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    current?: number;
    total: number;
    onChange?(page: number): void;
}
export declare class RvPaginationBuilder extends Component<IProps> {
    get mainClassNames(): string;
    renderButtons(): void;
    render(): ReactNode;
}
export {};
