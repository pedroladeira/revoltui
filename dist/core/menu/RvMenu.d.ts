import { Component, ReactNode } from 'react';
interface IProps {
    title?: string | ReactNode;
    fluid?: boolean;
}
export declare class RvMenu extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
