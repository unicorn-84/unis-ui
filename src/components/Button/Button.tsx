import React from 'react';
import { BUTTON } from '../../constants.js';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
}

const Button: React.FC<IButtonProps> = ({
  children,
  disabled = false,
  className = '',
  color = 'primary',
  ...props
}) => {
  if (disabled)
    return (
      <button
        {...props}
        className={BUTTON['disabled'] + (className && ` ${className}`)}
        disabled={disabled}
      >
        {children}
      </button>
    );

  return (
    <button
      {...props}
      className={BUTTON[color] + (className && ` ${className}`)}
    >
      {children}
    </button>
  );
};

export default Button;
