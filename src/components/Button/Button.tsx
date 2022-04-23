import React from 'react';

const classes = {
  primary:
    'rounded px-4 py-2 font-medium tracking-wide transition-colors bg-green-400 hover:bg-green-500 text-white border border-green-400 hover:border-green-500 shadow-md shadow-green-400/30 text-center',
  secondary:
    'rounded px-4 py-2 font-medium tracking-wide transition-colors bg-blue-400 hover:bg-blue-500 text-white border border-blue-400 hover:border-blue-500 shadow-md shadow-blue-400/30 text-center',
  disabled:
    'rounded px-4 py-2 font-medium tracking-wide transition-colors bg-gray-400 text-white border border-gray-400 shadow-md shadow-gray-400/30 text-center',
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
  color?: 'primary' | 'secondary';
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
