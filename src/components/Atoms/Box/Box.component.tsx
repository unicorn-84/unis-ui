import React, { FC, HTMLAttributes } from 'react';
import { ISpacing } from '../../../theme/types';
import BoxContainer from './Box.styles';

type Side = 'x' | 'y' | 'top' | 'right' | 'bottom' | 'left';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The CSS display property.
   */
  display?: 'block' | 'inline-block' | 'flex' | 'inline-flex';
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
   * The flex-shrink CSS property.
   */
  shrink?: number;
  /**
   * The flex-grow CSS property.
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
  /**
   * A component type or primitive that is rendered as the type of the root element.
   */
  as?: React.ElementType;
  /**
   * A fixed or relative size along its container's main axis.
   */
  basis?:
    | 'auto'
    | 'full'
    | '1/2'
    | '1/3'
    | '1/4'
    | '2/3'
    | '2/4'
    | '3/4'
    | String;
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
  as,
  display = 'flex',
  basis,
  ...props
}) => (
  <BoxContainer
    direction={direction}
    margin={margin}
    padding={padding}
    align={align}
    justify={justify}
    grow={grow}
    shrink={shrink}
    wrap={wrap}
    gap={gap}
    as={as}
    display={display}
    basis={basis}
    {...props}
  >
    {children}
  </BoxContainer>
);

export default Box;
