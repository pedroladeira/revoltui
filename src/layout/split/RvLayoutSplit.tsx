import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { Colors as ThemeColors, BgColor } from '../../theme';
import { HTMLBasicElementProps } from '../../utils/ElementProps';

interface IProps extends HTMLBasicElementProps {
  color?: ThemeColors;
  left?: ReactNode;
}

export class RvLayoutSplit extends Component<IProps> {

  get mainClassNames(): string {
    const { className } = this.props;

    return classNames(className, [
      'flex h-full'
    ]);
  }

  get leftClassNames(): string {
    const { color } = this.props;

    return classNames([
      'w-64 hidden sm:block overflow-scroll'
    ], color ? BgColor[color] : BgColor.default);
  }

  render(): ReactNode {
    const { left, children } = this.props;
    return (
      <div className={this.mainClassNames}>
        {left &&
          <div className={this.leftClassNames}>
            {left}
          </div>
        }
        <div className="flex-1 overflow-scroll">
          {children}
        </div>
      </div >
    )
  }
}
