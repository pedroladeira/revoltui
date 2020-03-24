import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    norounded?: boolean;
}
export declare class RvTable extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
