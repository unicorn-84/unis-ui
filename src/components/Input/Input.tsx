import React from 'react';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label text.
   */
  label?: string;
}

const Input: React.FC<IInputProps> = ({ label, className = '', ...props }) => {
  const input = (
    <input
      className={
        'bg-gray-50 border border-gray-400 text-gray-900 rounded px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:border-1 focus:border-current focus:ring-1 focus:ring-current' +
        (className && ` ${className}`)
      }
      {...props}
    />
  );
  if (label) {
    return (
      <>
        <label className="">
          <span className="text-gray-900 leading-relaxed">{label}</span>
          {input}
        </label>
      </>
    );
  }
  return input;
};

export default Input;
