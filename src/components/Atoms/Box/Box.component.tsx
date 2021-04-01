import React, { FC, HTMLAttributes } from 'react';
import { ISpacing } from '../../../theme/types';
import StyledBox from './Box.styles';

type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;

type Side = 'top' | 'right' | 'bottom' | 'left';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The amount of margin around the component.
   */
  margin?: {
    [key in Side]?: keyof ISpacing;
  };
}

const Box: FC<BoxProps> = ({ children, margin, ...props }) => (
  <StyledBox margin={margin} {...props}>
    {children}
  </StyledBox>
);

export default Box;
