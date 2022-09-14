import React from 'react';
import { Icon } from '../index.js';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the component.
   * @default primary
   */
  variant?: 'primary' | 'outline primary' | 'outline gray' | 'ghost';

  /**
   * The size of the component.
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';

  /**
   * If true, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * A destructive style of the button.
   * @default 'false'
   */
  destructive?: boolean;

  /**
   * Element placed before the children.
   * xs - 16x16 bounding box
   * sm - 16x16 bounding box
   * md - 24x24 bounding box
   * lg - 24x24 bounding box
   */
  iconStart?: React.ReactNode;

  /**
   * Element placed after the children.
   * xs - 16x16 bounding box
   * sm - 16x16 bounding box
   * md - 24x24 bounding box
   * lg - 24x24 bounding box
   */
  iconEnd?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  destructive = false,
  iconStart,
  iconEnd,
  ...props
}) => {
  return (
    <button
      className={
        'rounded transition-colors outline-none font-medium inline-flex items-center justify-center ' +
        (size === 'md'
          ? `${
              children ? 'px-[1.1875rem]' : 'px-[0.4375rem]'
            } py-[0.4375rem] text-base `
          : size === 'sm'
          ? `${
              children
                ? 'px-[0.9375rem] py-[0.4375rem]'
                : 'px-[0.5625rem] py-[0.5625rem]'
            } text-sm `
          : size === 'xs'
          ? `${
              children ? 'px-[0.9375rem]' : 'px-[0.4375rem]'
            } py-[0.4375rem] text-xs `
          : `${
              children
                ? 'px-[1.4375rem] py-[0.6875rem]'
                : 'px-[0.6875rem] py-[0.6875rem]'
            } text-base `) +
        (destructive === false
          ? variant === 'primary'
            ? 'border border-1 border-[#0354a6] bg-[#0354a6] text-white hover:border-[#064280] hover:bg-[#064280] hover:shadow focus:border-[#064280] focus:bg-[#064280] disabled:bg-[#9ec8f1] disabled:border-[#9ec8f1] disabled:shadow-none'
            : variant === 'outline primary'
            ? 'border border-1 border-[#0354a6] text-[#0354a6] hover:border-[#064280] hover:text-[#064280] hover:bg-[#f2f4f7] hover:shadow focus:border-[#064280] focus:text-[#064280] focus:bg-[#e4e7ec] disabled:bg-[white] disabled:border-[#9ec8f1] disabled:text-[#9ec8f1] disabled:shadow-none'
            : variant === 'outline gray'
            ? 'border border-1 border-[#98a2b3] text-[#101828] hover:border-[#667085] hover:text-[#101828] hover:bg-[#f2f4f7] hover:shadow focus:border-[#667085] focus:text-[#101828] focus:bg-[#e4e7ec] disabled:bg-[white] disabled:border-[#98a2b3] disabled:text-[#98a2b3] disabled:shadow-none'
            : variant === 'ghost'
            ? 'text-[#0354a6] hover:text-[#064280] hover:bg-[#fcfcfd] hover:shadow focus:text-[#064280] focus:bg-[#fcfcfd] focus:shadow-none disabled:bg-[white] disabled:text-[#9ec8f1] disabled:shadow-none'
            : ''
          : variant === 'primary'
          ? 'border border-1 border-[#bb251a] bg-[#bb251a] text-white hover:border-[#912018] hover:bg-[#912018] hover:shadow focus:border-[#912018] focus:bg-[#bb251a] disabled:bg-[#fca5a5] disabled:border-[#fca5a5] disabled:shadow-none'
          : variant === 'outline primary'
          ? 'border border-1 border-[#bb251a] text-[#bb251a] hover:border-[#912018] hover:text-[#912018] hover:shadow hover:bg-[#f2f4f7] focus:border-[#912018] focus:text-[#912018] focus:bg-[#e4e7ec] disabled:bg-[white] disabled:border-[#fca5a5] disabled:text-[#fca5a5] disabled:shadow-none'
          : variant === 'outline gray'
          ? 'border border-1 border-[#bb251a] text-[#bb251a] hover:border-[#912018] hover:text-[#912018] hover:shadow hover:bg-[#f2f4f7] focus:border-[#912018] focus:text-[#912018] focus:bg-[#e4e7ec] disabled:bg-[white] disabled:border-[#fca5a5] disabled:text-[#fca5a5] disabled:shadow-none'
          : variant === 'ghost'
          ? 'text-[#bb251a] hover:text-[#912018] hover:bg-[#fcfcfd] hover:shadow focus:text-[#912018] focus:bg-[#fcfcfd] focus:shadow-none disabled:bg-[white] disabled:text-[#fca5a5] disabled:shadow-none'
          : '') +
        (fullWidth ? ' w-full' : '') +
        (className ? ` ${className}` : '')
      }
      {...props}
    >
      {iconStart && (
        <Icon
          icon={iconStart}
          size={size === 'md' || size === 'lg' ? 'sm' : 'xs'}
          className={children ? 'mr-2' : ''}
        />
      )}
      {children}
      {!iconStart && iconEnd && (
        <Icon
          icon={iconEnd}
          size={size === 'md' || size === 'lg' ? 'sm' : 'xs'}
          className={children ? 'ml-2' : ''}
        />
      )}
    </button>
  );
};

export default Button;
