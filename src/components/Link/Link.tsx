import React from 'react';

const classes = {
  primary: {
    text: 'tracking-wide transition-colors text-green-400 hover:text-green-500',
    contained:
      'rounded px-4 py-2 font-medium tracking-wide transition-colors bg-green-400 hover:bg-green-500 text-white border border-green-400 hover:border-green-500 shadow-md shadow-green-400/30 text-center',
    outlined:
      'rounded px-4 py-2 font-medium tracking-wide border-2 border-green-400 ring-green-400 text-green-400 hover:ring-1 transition-shadow text-center',
  },
  secondary: {
    text: 'tracking-wide transition-colors text-blue-400 hover:text-blue-500',
    contained:
      'rounded px-4 py-2 font-medium tracking-wide transition-colors bg-blue-400 hover:bg-blue-500 text-white border border-blue-400 hover:border-blue-500 shadow-md shadow-blue-400/30 text-center',
    outlined:
      'rounded px-4 py-2 font-medium tracking-wide border-2 border-blue-400 ring-blue-400 text-blue-400 hover:ring-1 transition-shadow text-center',
  },
  underline: 'underline underline-offset-2',
};

export interface ILinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary';

  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: 'text' | 'contained' | 'outlined';

  /**
   * The decorative line on text.
   */
  underlined?: boolean;

  /**
   * The URL to link.
   */
  href: string;
}

const Link: React.FC<ILinkProps> = ({
  children,
  className = '',
  color = 'primary',
  variant = 'text',
  underlined = true,
  href,
  ...props
}) => {
  return (
    <a
      className={
        classes[color][variant] +
        (underlined && variant === 'text' ? ` ${classes.underline}` : '') +
        (className && ` ${className}`)
      }
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
