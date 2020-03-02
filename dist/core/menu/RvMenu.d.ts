import { Component, ReactNode } from 'react';
interface IProps {
    title?: string | ReactNode;
    fluid?: boolean;
    vertical?: boolean;
}
export declare class RvMenu extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
