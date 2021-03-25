import React, { AnchorHTMLAttributes, MouseEvent } from 'react';
import StyledLink from './Link.styles';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Whether the anchor is disabled.
   */
  disabled?: boolean;
  /**
   * Controls when the link should have an underline.
   */
  underline?: 'none' | 'always';
}

export default ({
  children,
  disabled = false,
  underline,
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
    >
      {children}
    </StyledLink>
  );
};
