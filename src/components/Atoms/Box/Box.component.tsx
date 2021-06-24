import React, { FC, HTMLAttributes } from 'react';
import { SpacingNames, SideNames, SizeNames } from '../../../theme/types';
import BoxContainer from './Box.styles';

type WidthHeightNames = 'width' | 'height' | 'min' | 'max';

export interface BoxProps
  extends Omit<HTMLAttributes<HTMLElement>, 'height' | 'width' | 'color'> {
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
  gap?: SpacingNames;
  /**
   * The amount of margin around the component.
   */
  margin?: SpacingNames | Partial<Record<SideNames, SpacingNames>>;
  /**
   * The amount of padding around the box contents/
   */
  padding?: SpacingNames | Partial<Record<SideNames, SpacingNames>>;
  /**
   * A component type or primitive that is rendered as the type of the root element.
   */
  as?: React.ElementType;
  /**
   * A fixed or relative size along its container's main axis.
   */
  basis?: SizeNames;
  /**
   * A fixed height.
   */
  height?:
    | string
    | SizeNames
    | Partial<Record<Exclude<WidthHeightNames, 'width'>, string | SizeNames>>;
  /**
   * A fixed width.
   */
  width?:
    | string
    | SizeNames
    | Partial<Record<Exclude<WidthHeightNames, 'height'>, string | SizeNames>>;
}

const Box: FC<BoxProps> = ({
  children,
  direction,
  align,
  justify,
  grow,
  shrink,
  wrap,
  margin,
  padding,
  gap,
  as,
  display = 'flex',
  basis,
  height,
  width,
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
    height={height}
    width={width}
    {...props}
  >
    {children}
  </BoxContainer>
);

export default Box;
