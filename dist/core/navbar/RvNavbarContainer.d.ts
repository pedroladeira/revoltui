import { Component, ReactNode } from 'react';
interface IProps {
    title?: string | ReactNode;
    fluid?: boolean;
}
export declare class RvNavbarContainer extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
