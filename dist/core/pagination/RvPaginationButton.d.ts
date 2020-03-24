import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    firstChild?: boolean;
    lastChild?: boolean;
    onClick?(): void;
}
export declare class RvPaginationButton extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
