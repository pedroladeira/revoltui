import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    title?: string;
}
export declare class RvInputControl extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
