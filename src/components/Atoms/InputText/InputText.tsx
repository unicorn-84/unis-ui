import React from 'react';

const InputText: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  // eslint-disable-next-line react/prop-types
  className,
  ...props
}) => {
  return (
    <input
      type="text"
      className={
        'border border-[#98a2b3] rounded-[4px] transition hover:border-[#667085] hover:shadow-sm text-base text-[#101828] py-2 px-4 outline-none focus:border-[#0354a6] disabled:shadow-none disabled:text-slate-500 disabled:border-[#d0d5dd] disabled:bg-[#f2f4f7] placeholder:text-[#98a2b3]' +
        (className ? ` ${className}` : '')
      }
      {...props}
    />
  );
};

export default InputText;
