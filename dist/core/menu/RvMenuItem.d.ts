import { Component, ReactNode } from 'react';
interface IProps {
    url?: string;
    active?: boolean;
}
export declare class RvMenuItem extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
