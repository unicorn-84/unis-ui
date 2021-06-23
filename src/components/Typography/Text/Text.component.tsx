import React, { FC, HTMLAttributes } from 'react';
import { ColorNames } from '../../../theme/types';
import StyledText from './Text.style';

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  /**
   * Applies the theme typography styles.
   */
  variant?: 'text' | 'strong' | 'small' | 'button';
  /**
   * A component type or primitive that is rendered as the type of the root element.
   */
  as?: React.ElementType;
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
   * Defines text that should be marked or highlighted.
   */
  marked?: Extract<
    ColorNames,
    'brandPrimary' | 'brandSecondary' | 'fonLight' | 'fonDark' | 'fonGray'
  >;
}

const Text: FC<TextProps> = ({
  children,
  variant = 'text',
  as = 'span',
  color = 'textSecondary',
  marked,
  ...props
}) => (
  <StyledText
    variant={variant}
    as={as}
    color={color}
    {...props}
    marked={marked}
  >
    {children}
  </StyledText>
);

export default Text;
