import React, { ButtonHTMLAttributes, FC } from 'react';
import StyledButton from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Fill color or border color.
   */
  color?: 'primary' | 'secondary';
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string;
  /**
   * The variant to use.
   */
  variant?: 'text' | 'outlined' | 'contained';
}

const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  disabled = false,
  fullWidth = false,
  href,
  variant = 'contained',
  ...props
}) => {
  const domTag = href ? 'a' : 'button';
  return (
    <StyledButton
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      href={href}
      as={domTag}
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
