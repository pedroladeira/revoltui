import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    title?: string | ReactNode;
    fluid?: boolean;
}
export declare class RvNavbarContainer extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
