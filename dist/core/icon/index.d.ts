import { Component, ReactNode } from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
interface IProps {
    size?: 'sm' | 'md' | 'lg';
    name?: boolean;
}
export declare class RvIcon extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
