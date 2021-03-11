import React, { FC, HTMLAttributes } from 'react';
import StyledParagraph from './Paragraph.styles';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Applies the theme typography styles.
   */
  variant?: 'body';
}

const Paragraph: FC<ParagraphProps> = ({
  children,
  variant = 'body',
  ...props
}) => (
  <StyledParagraph variant={variant} {...props}>
    {children}
  </StyledParagraph>
);

export default Paragraph;
