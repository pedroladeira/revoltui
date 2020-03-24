import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
  center?: boolean;
}

export class RvContainer extends Component<IProps> {

  get mainClassNames(): string {
    const { center, className } = this.props;

    return classNames(className, 'container', {
      'mx-auto': center
    });
  }
  render(): ReactNode {
    const { children } = this.props;
    return (
      <div className={this.mainClassNames}>
        {children}
      </div>
    )
  }
}
