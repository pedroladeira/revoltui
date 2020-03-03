import { Component, ReactNode } from 'react';
interface IProps {
    title: string;
    href: string;
}
export declare class RvDropdownItem extends Component<IProps> {
    get mainClassNames(): string;
    render(): ReactNode;
}
export {};
