import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    center?: boolean;
}
export declare class RvContainer extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
