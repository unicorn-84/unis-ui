import { ISpacing } from '.';

export interface IFlexProps {
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
  gap?: keyof ISpacing | (string & {});
  /**
   * A fixed or relative size along its container's main axis.
   */
  basis?: keyof ISpacing | (string & {});
}
