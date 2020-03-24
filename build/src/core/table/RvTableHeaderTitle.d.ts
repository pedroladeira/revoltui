import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    align?: 'left' | 'center' | 'right' | 'justify';
}
export declare class RvTableHeaderTitle extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
