import React, { FC, HTMLAttributes } from 'react';
import { ISpacing } from '../../../theme/types';
import StyledBox from './Box.styles';

type Side = 'x' | 'y' | 'top' | 'right' | 'bottom' | 'left';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The CSS flex-direction property.
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**
   * How to align the contents along the cross axis.
   */
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  /**
   * How to align the contents along the main axis.
   */
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  /**
   * The flex-shrink CSS prpperty.
   */
  shrink?: number;
  /**
   * The flex-grow CSS prpperty.
   */
  grow?: number;
  /**
   * The flex-wrap CSS propperty.
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /**
   * The amount of spacing between child elements.
   */
  gap?: keyof ISpacing;
  /**
   * The amount of margin around the component.
   */
  margin?: keyof ISpacing | Partial<Record<Side, keyof ISpacing>>;
  /**
   * The amount of padding around the box contents/
   */
  padding?: keyof ISpacing | Partial<Record<Side, keyof ISpacing>>;
}

const Box: FC<BoxProps> = ({
  children,
  direction,
  align,
  justify,
  grow,
  shrink,
  wrap,
  margin = 'none',
  padding = 'none',
  gap,
  ...props
}) => (
  <StyledBox
    direction={direction}
    margin={margin}
    padding={padding}
    align={align}
    justify={justify}
    grow={grow}
    shrink={shrink}
    wrap={wrap}
    gap={gap}
    {...props}
  >
    {children}
  </StyledBox>
);

export default Box;
