import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    align?: 'right' | 'center';
}
export declare class RvTableCol extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
