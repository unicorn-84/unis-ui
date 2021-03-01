import React, { FC, HTMLAttributes, ReactNode } from 'react';
import StyledText from './Text.styles';

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
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
  /**
   * The DOM tag.
   */
  tag: 'p' | 'span';
}

const Text: FC<TextProps> = ({
  className,
  a11yLabel,
  tag,
  children,
  variant,
}) => (
  <StyledText
    className={className}
    aria-label={a11yLabel}
    as={tag}
    tag={tag}
    variant={variant}
  >
    {children}
  </StyledText>
);

export default Text;
