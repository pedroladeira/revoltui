import { Component, ReactNode } from 'react';
interface IProps {
    center?: boolean;
}
export declare class RvContainer extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
