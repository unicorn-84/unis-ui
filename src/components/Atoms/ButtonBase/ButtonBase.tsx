import React from 'react';

interface IButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}

const ButtonBase: React.FC<IButtonBaseProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  destructive = false,
  ...props
}) => {
  return (
    <button
      className={
        'rounded transition-colors outline-none font-medium ' +
        (size === 'md'
          ? 'px-5 py-[0.45rem] text-base '
          : size === 'sm'
          ? 'px-4 py-[0.45rem] text-sm '
          : size === 'xs'
          ? 'px-4 py-[0.45rem] text-xs '
          : 'px-6 py-[0.7rem] text-base ') +
        (destructive === false
          ? variant === 'primary'
            ? 'border border-1 border-[#0354a6] bg-[#0354a6] text-white hover:border-[#064280] hover:bg-[#064280] hover:shadow focus:border-[#064280] focus:bg-[#064280] disabled:bg-[#9ec8f1] disabled:border-[#9ec8f1] disabled:shadow-none '
            : variant === 'outline primary'
            ? 'border border-1 border-[#0354a6] text-[#0354a6] hover:border-[#064280] hover:text-[#064280] hover:bg-[#f2f4f7] hover:shadow focus:border-[#064280] focus:text-[#064280] focus:bg-[#e4e7ec] disabled:bg-[white] disabled:border-[#9ec8f1] disabled:text-[#9ec8f1] disabled:shadow-none '
            : variant === 'outline gray'
            ? 'border border-1 border-[#98a2b3] text-[#101828] hover:border-[#667085] hover:text-[#101828] hover:bg-[#f2f4f7] hover:shadow focus:border-[#667085] focus:text-[#101828] focus:bg-[#e4e7ec] disabled:bg-[white] disabled:border-[#98a2b3] disabled:text-[#98a2b3] disabled:shadow-none '
            : variant === 'ghost'
            ? 'text-[#0354a6] hover:text-[#064280] hover:bg-[#fcfcfd] hover:shadow focus:text-[#064280] focus:bg-[#fcfcfd] focus:shadow-none disabled:bg-[white] disabled:text-[#9ec8f1] disabled:shadow-none '
            : ''
          : variant === 'primary'
          ? 'border border-1 border-[#bb251a] bg-[#bb251a] text-white hover:border-[#912018] hover:bg-[#912018] hover:shadow focus:border-[#912018] focus:bg-[#bb251a] disabled:bg-[#fca5a5] disabled:border-[#fca5a5] disabled:shadow-none '
          : variant === 'outline primary'
          ? 'border border-1 border-[#bb251a] text-[#bb251a] hover:border-[#912018] hover:text-[#912018] hover:shadow hover:bg-[#f2f4f7] focus:border-[#912018] focus:text-[#912018] focus:bg-[#e4e7ec] disabled:bg-[white] disabled:border-[#fca5a5] disabled:text-[#fca5a5] disabled:shadow-none '
          : variant === 'outline gray'
          ? 'border border-1 border-[#bb251a] text-[#bb251a] hover:border-[#912018] hover:text-[#912018] hover:shadow hover:bg-[#f2f4f7] focus:border-[#912018] focus:text-[#912018] focus:bg-[#e4e7ec] disabled:bg-[white] disabled:border-[#fca5a5] disabled:text-[#fca5a5] disabled:shadow-none '
          : variant === 'ghost'
          ? 'text-[#bb251a] hover:text-[#912018] hover:bg-[#fcfcfd] hover:shadow focus:text-[#912018] focus:bg-[#fcfcfd] focus:shadow-none disabled:bg-[white] disabled:text-[#fca5a5] disabled:shadow-none '
          : '') +
        (fullWidth ? 'w-full ' : '') +
        (className ? ` ${className}` : '')
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonBase;
