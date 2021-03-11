import React, { FC, HTMLAttributes } from 'react';
import StyledText from './Text.styles';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Applies the theme typography styles.
   */
  variant?: 'text' | 'strong' | 'small' | 'button';
  /**
   * The DOM tag.
   */
  tag?: 'span';
}

const Text: FC<TextProps> = ({
  children,
  variant = 'text',
  tag = 'span',
  ...props
}) => (
  <StyledText variant={variant} tag={tag} {...props}>
    {children}
  </StyledText>
);

export default Text;
