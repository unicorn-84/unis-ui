import React, { FC, HTMLAttributes, ReactNode } from 'react';
import StyledParagraph from './Paragraph.styles';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
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
  variant?: 'body';
}

const Paragraph: FC<ParagraphProps> = ({
  children,
  className,
  a11yLabel,
  variant = 'body',
}) => (
  <StyledParagraph
    className={className}
    aria-label={a11yLabel}
    variant={variant}
  >
    {children}
  </StyledParagraph>
);

export default Paragraph;
