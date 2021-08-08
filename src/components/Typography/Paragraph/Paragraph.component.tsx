import React, { FC, HTMLAttributes } from 'react';
import { IBase, ITextStyles } from '../../../theme/types';
import StyledParagraph from './Paragraph.style';

export interface ParagraphProps
  extends IBase,
    ITextStyles,
    Omit<HTMLAttributes<HTMLElement>, 'color'> {
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
