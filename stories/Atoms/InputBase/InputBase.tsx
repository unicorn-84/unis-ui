import React from 'react';

interface IInputBaseProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * If `true`, the component is displayed in an error state.
   * @default false
   */
  error?: boolean;

  /**
   * The size of the component.
   * @default 'md'
   */
  size?: 'sm' | 'md';
}

const InputBase: React.FC<IInputBaseProps> = ({
  className,
  error = false,
  size = 'md',
  ...props
}) => {
  return (
    <input
      type="text"
      className={
        'border ' +
        (error
          ? 'border-[#bb251a] hover:border-[#bb251a] focus:border-[#912018] '
          : 'border-[#98a2b3] hover:border-[#667085] focus:border-[#0354a6] ') +
        (size === 'sm' ? 'text-sm py-1 ' : 'text-base py-2 ') +
        'block w-full rounded-[4px] transition hover:shadow-sm text-base text-[#101828] px-4 outline-none  disabled:shadow-none disabled:text-slate-500 disabled:border-[#d0d5dd] disabled:bg-[#f2f4f7] placeholder:text-[#98a2b3]' +
        (className ? ` ${className}` : '')
      }
      {...props}
    />
  );
};

export default InputBase;
