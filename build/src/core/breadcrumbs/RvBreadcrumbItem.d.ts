import { Component, ReactNode } from 'react';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    isLast?: boolean;
}
export declare class RvBreadcrumbItem extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
