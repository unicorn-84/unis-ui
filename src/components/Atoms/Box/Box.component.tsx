import React, { FC, HTMLAttributes } from 'react';
import { ISpacing } from '../../../theme/types';
import StyledBox from './Box.styles';

type Side = 'x' | 'y' | 'top' | 'right' | 'bottom' | 'left';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The amount of margin around the component.
   */
  margin?: keyof ISpacing | Partial<Record<Side, keyof ISpacing>>;
}

const Box: FC<BoxProps> = ({ children, margin = 'none', ...props }) => (
  <StyledBox margin={margin} {...props}>
    {children}
  </StyledBox>
);

export default Box;
