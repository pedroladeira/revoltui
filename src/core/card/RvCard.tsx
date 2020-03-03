import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
  norounded?: boolean
}

export class RvCard extends Component<IProps> {

  get mainClassNames(): string {
    const { norounded } = this.props;

    return classNames({
      'sm:rounded-lg': !norounded
    }, [
      'shadow overflow-hidden'
    ]);
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
