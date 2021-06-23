import React, { AnchorHTMLAttributes, MouseEvent } from 'react';
import { TextProps } from '../../Typography/Text';
import StyledLink from './Link.style';

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>,
    Pick<TextProps, 'color' | 'marked' | 'variant'> {
  /**
   * Whether the anchor is disabled.
   */
  disabled?: boolean;
  /**
   * Controls when the link should have an underline.
   */
  underline?: 'none' | 'always';
}

const Link = ({
  children,
  disabled = false,
  underline,
  color = 'brandSecondary',
  marked,
  variant = 'strong',
  ...props
}: LinkProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
    }
  };
  return (
    <StyledLink
      onClick={handleClick}
      aria-disabled={disabled}
      {...props}
      disabled={disabled}
      underline={underline}
      color={color}
      marked={marked}
      variant={variant}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
