import React, { FC, HTMLAttributes } from 'react';
import { IBase, ITextStyles } from '../../../theme/types';
import StyledText from './Text.style';

export interface TextProps
  extends IBase,
    ITextStyles,
    Omit<HTMLAttributes<HTMLElement>, 'color'> {
  /**
   * Applies the theme typography styles.
   */
  variant?: 'text' | 'strong' | 'small' | 'button';
}

const Text: FC<TextProps> = ({ children, variant, ...props }) => (
  <StyledText variant={variant} {...props}>
    {children}
  </StyledText>
);

export default Text;
