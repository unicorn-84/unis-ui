import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInputProps> = ({ className, ...props }) => {
  return (
    <input
      className={
        'border border-slate-400 rounded-[4px] transition hover:border-slate-500 hover:shadow-sm text-base text-gray-900 py-2 px-4 outline-none focus:border-sky-700 disabled:text-slate-500 disabled:border-gray-300 disabled:bg-gray-100 placeholder:text-gray-400' +
        (className ? ` ${className}` : '')
      }
      {...props}
    />
  );
};

export default Input;
