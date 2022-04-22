import React from 'react';

const classes = {
  primary:
    'rounded px-4 py-2 text-sm font-medium tracking-wide transition-colors bg-emerald-600 text-white hover:bg-emerald-700',
  secondary:
    'rounded px-4 py-2 text-sm font-medium tracking-wide transition-colors bg-sky-600 text-white hover:bg-sky-700',
  success:
    'rounded px-4 py-2 text-sm font-medium tracking-wide transition-colors bg-green-500 text-white hover:bg-green-600',
  info: 'rounded px-4 py-2 text-sm font-medium tracking-wide transition-colors bg-blue-500 text-white hover:bg-blue-600',
  warning:
    'rounded px-4 py-2 text-sm font-medium tracking-wide transition-colors bg-yellow-500 text-white hover:bg-yellow-600',
  error:
    'rounded px-4 py-2 text-sm font-medium tracking-wide transition-colors bg-red-500 text-white hover:bg-red-600',
  disabled:
    'rounded px-4 py-2 text-sm font-medium tracking-wide transition-colors bg-gray-400 text-white',
};

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
        className={classes['disabled'] + (className && ` ${className}`)}
        disabled={disabled}
      >
        {children}
      </button>
    );

  return (
    <button
      {...props}
      className={classes[color] + (className && ` ${className}`)}
    >
      {children}
    </button>
  );
};

export default Button;
