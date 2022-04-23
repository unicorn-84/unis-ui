import React from 'react';

const classes = {
  primary: {
    text: 'tracking-wide text-emerald-500',
    contained:
      'inline-block rounded px-4 py-2 font-medium tracking-wide transition-colors bg-emerald-500 hover:bg-emerald-600 text-white border-2 border-emerald-500 hover:border-emerald-600 shadow-md shadow-emerald-500/30 text-center',
    outlined:
      'inline-block rounded px-4 py-2 font-medium tracking-wide border-2 border-emerald-500 ring-emerald-500 text-emerald-500 hover:ring-1 transition-shadow text-center',
  },
  secondary: {
    text: 'tracking-wide text-sky-500',
    contained:
      'inline-block rounded px-4 py-2 font-medium tracking-wide transition-colors bg-sky-500 hover:bg-sky-600 text-white border-2 border-sky-500 hover:border-sky-600 shadow-md shadow-sky-500/30 text-center',
    outlined:
      'inline-block rounded px-4 py-2 font-medium tracking-wide border-2 border-sky-500 ring-sky-500 text-sky-500 hover:ring-1 transition-shadow text-center',
  },
  link: {
    text: 'tracking-wide text-blue-500',
    contained:
      'inline-block rounded px-4 py-2 font-medium tracking-wide transition-colors bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-500 hover:border-blue-600 shadow-md shadow-blue-500/30 text-center',
    outlined:
      'inline-block rounded px-4 py-2 font-medium tracking-wide border-2 border-blue-500 ring-blue-500 text-blue-500 hover:ring-1 transition-shadow text-center',
  },
  underline: 'underline underline-offset-2',
};

export interface ILinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The color of the component.
   * @default 'link'
   */
  color?: 'primary' | 'secondary' | 'link';

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
  color = 'link',
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
