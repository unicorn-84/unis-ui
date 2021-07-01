import React, { FC, HTMLAttributes } from 'react';
import { IPalette } from '../../../theme/types';
import { ParagraphProps } from '../Paragraph';
import StyledHeading from './Heading.style';

export interface HeadingProps
  extends Pick<ParagraphProps, 'disableMargins'>,
    Omit<HTMLAttributes<HTMLElement>, 'color'> {
  /**
   * Applies the theme typography styles.
   */
  variant?: 'title' | 'h2' | 'h3' | 'h4' | 'subtitle';
  /**
   * The heading level. It corresponds to the number after the 'H' for the DOM tag.
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * The color of the component.
   */
  color?: keyof IPalette;
  /**
   * Defines text that should be marked or highlighted.
   */
  marked?: keyof IPalette;
}

const Heading: FC<HeadingProps> = ({
  level = 'h1',
  children,
  variant = 'title',
  marked,
  color,
  disableMargins = false,
  ...props
}) => (
  <StyledHeading
    as={level}
    level={level}
    variant={variant}
    marked={marked}
    disableMargins={disableMargins}
    color={color}
    {...props}
  >
    {children}
  </StyledHeading>
);

export default Heading;
