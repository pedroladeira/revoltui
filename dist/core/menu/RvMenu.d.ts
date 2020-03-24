import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    title?: string | ReactNode;
    fluid?: boolean;
    vertical?: boolean;
}
export declare class RvMenu extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
