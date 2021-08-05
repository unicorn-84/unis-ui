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
  /**
   * If 'true', the margins is removed.
   */
  disableMargins?: boolean;
}

const Paragraph: FC<ParagraphProps> = ({
  children,
  variant = 'body',
  disableMargins,
  ...props
}) => (
  <StyledParagraph variant={variant} disableMargins={disableMargins} {...props}>
    {children}
  </StyledParagraph>
);

export default Paragraph;
