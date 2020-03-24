import { Component, ReactNode } from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { HTMLBasicElementProps } from '../../utils/ElementProps';
interface IProps extends HTMLBasicElementProps {
    size?: 'sm' | 'md' | 'lg';
    name?: string;
}
export declare class RvIcon extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
