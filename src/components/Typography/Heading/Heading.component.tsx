import React, { FC, HTMLAttributes } from 'react';
import StyledHeading from './Heading.styles';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Applies the theme typography styles.
   */
  variant?: 'title' | 'h2' | 'h3' | 'h4' | 'subtitle';
  /**
   * The heading level. It corresponds to the number after the 'H' for the DOM tag.
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: FC<HeadingProps> = ({
  level = 'h1',
  children,
  variant = 'title',
  ...props
}) => (
  <StyledHeading as={level} level={level} variant={variant} {...props}>
    {children}
  </StyledHeading>
);

export default Heading;
