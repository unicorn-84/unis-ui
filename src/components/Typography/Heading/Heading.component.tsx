import React, { FC, HTMLAttributes, ReactNode } from 'react';
import StyledHeading from './Heading.styles';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Class to be applied to the root element.
   */
  className?: string;
  /**
   * Custom label to be used by screen readers. When provided, an aria-label will be added to the element.
   */
  a11yLabel?: string;
  /**
   * Applies the theme typography styles.
   */
  variant: 'title' | 'h2' | 'h3' | 'h4' | 'subtitle';
  /**
   * The heading level. It corresponds to the number after the 'H' for the DOM tag.
   */
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: FC<HeadingProps> = ({
  className,
  a11yLabel,
  level,
  children,
  variant,
}) => (
  <StyledHeading
    className={className}
    aria-label={a11yLabel}
    as={level}
    level={level}
    variant={variant}
  >
    {children}
  </StyledHeading>
);

export default Heading;
