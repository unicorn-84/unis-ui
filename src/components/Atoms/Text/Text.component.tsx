import React, { FC, HTMLAttributes, ReactNode } from 'react';
import StyledText from './Text.styles';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
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
  variant: 'body' | 'text';
}

const Text: FC<TextProps> = ({ className, a11yLabel, children, variant }) => (
  <StyledText className={className} aria-label={a11yLabel} variant={variant}>
    {children}
  </StyledText>
);

export default Text;
