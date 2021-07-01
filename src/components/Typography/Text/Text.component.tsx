import React, { FC, HTMLAttributes } from 'react';
import { IBase, ITextStyles } from '../../../theme/types';
import StyledText from './Text.style';

export interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color'>,
    IBase,
    ITextStyles {
  /**
   * Applies the theme typography styles.
   */
  variant?: 'text' | 'strong' | 'small' | 'button';
}

const Text: FC<TextProps> = ({
  children,
  variant = 'text',
  as = 'span',
  color,
  marked,
  ...props
}) => (
  <StyledText
    variant={variant}
    as={as}
    color={color}
    marked={marked}
    {...props}
  >
    {children}
  </StyledText>
);

export default Text;
