import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    toggle: ReactNode;
    open: boolean;
}
export declare class RvDropdown extends Component<IProps> {
    get mainClassNames(): string;
    get itemsClassNames(): string;
    render(): ReactNode;
}
export {};
