import { Component, ReactNode } from 'react';
interface IProps {
    toggle: ReactNode;
    open: boolean;
}
export declare class RvDropdown extends Component<IProps> {
    get mainClassNames(): string;
    get itemsClassNames(): string;
    render(): ReactNode;
}
export {};
