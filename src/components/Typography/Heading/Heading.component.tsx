import React, { FC, HTMLAttributes } from 'react';
import { ParagraphProps } from '../Paragraph';
import { TextProps } from '../Text';
import StyledHeading from './Heading.style';

export interface HeadingProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'>,
    Pick<TextProps, 'marked' | 'color'>,
    Pick<ParagraphProps, 'disableMargins'> {
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
  marked,
  color = 'textPrimary',
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
