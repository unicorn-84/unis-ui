import React from 'react';

const classes = {
  primary: {
    contained:
      'rounded px-4 py-2 font-medium tracking-wide transition-colors bg-emerald-500 hover:bg-emerald-600 text-white border-2 border-emerald-500 hover:border-emerald-600 text-center',
    outlined:
      'rounded px-4 py-2 font-medium tracking-wide border-2 border-emerald-500 ring-emerald-500 text-emerald-500 hover:ring-1 transition-shadow text-center',
    text: 'font-medium tracking-wide text-emerald-500',
  },
  secondary: {
    contained:
      'rounded px-4 py-2 font-medium tracking-wide transition-colors bg-sky-500 hover:bg-sky-600 text-white border-2 border-sky-500 hover:border-sky-600 text-center',
    outlined:
      'rounded px-4 py-2 font-medium tracking-wide border-2 border-sky-500 ring-sky-500 text-sky-500 hover:ring-1 transition-shadow text-center',
    text: 'font-medium tracking-wide text-sky-500',
  },
  link: {
    contained:
      'rounded px-4 py-2 font-medium tracking-wide transition-colors bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-500 hover:border-blue-600 text-center',
    outlined:
      'rounded px-4 py-2 font-medium tracking-wide border-2 border-blue-500 ring-blue-500 text-blue-500 hover:ring-1 transition-shadow text-center',
    text: 'font-medium tracking-wide text-blue-500',
  },
  disabled:
    'rounded px-4 py-2 font-medium tracking-wide transition-colors bg-gray-400 text-white border-2 border-gray-400 text-center',
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
  color?: 'primary' | 'secondary' | 'link';

  /**
   * The variant to use.
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text';
}

const Button: React.FC<IButtonProps> = ({
  children,
  disabled = false,
  className = '',
  color = 'primary',
  variant = 'contained',
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
      className={classes[color][variant] + (className && ` ${className}`)}
    >
      {children}
    </button>
  );
};

export default Button;
