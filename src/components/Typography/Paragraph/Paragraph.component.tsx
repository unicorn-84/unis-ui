import React, { FC, HTMLAttributes } from 'react';
import { ColorNames } from '../../../theme/types/IPalette';
import StyledParagraph from './Paragraph.style';

export interface ParagraphProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'> {
  /**
   * Applies the theme typography styles.
   */
  variant?: 'body';
  /**
   * The color of the component.
   */
  color?: Extract<
    ColorNames,
    | 'brandPrimary'
    | 'brandSecondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'textDark'
    | 'textLight'
    | 'textGray'
  >;
  /**
   * If 'true', the margins is removed.
   */
  disableMargins?: boolean;
}

const Paragraph: FC<ParagraphProps> = ({
  children,
  variant = 'body',
  color = 'textSecondary',
  disableMargins,
  ...props
}) => (
  <StyledParagraph
    variant={variant}
    color={color}
    disableMargins={disableMargins}
    {...props}
  >
    {children}
  </StyledParagraph>
);

export default Paragraph;
