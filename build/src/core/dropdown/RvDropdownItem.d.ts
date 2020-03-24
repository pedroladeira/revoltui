import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    onClick?(): void;
}
export declare class RvDropdownItem extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
