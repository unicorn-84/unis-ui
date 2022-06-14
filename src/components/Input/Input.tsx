import React from 'react';
import { InputTextHint, InputTextLabel } from '../index.js';

interface IInputTextProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The label text.
   */
  label?: string;

  /**
   * The size of the component.
   * @default 'md'
   */
  size?: 'sm' | 'md';

  /**
   * The helper text. Required the label.
   */
  helperText?: string;

  /**
   * If true, the component is displayed in an error state.
   */
  error?: boolean;

  /**
   * The error message. Required the error.
   */
  errorMessage?: string;

  /**
   * If true, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Classes applied to the native label.
   */
  labelClass?: string;

  /**
   * The id of the native input element.
   */
  id?: string;

  /**
   * Type of the `input` element.
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password';
}

const InputText: React.FC<IInputTextProps> = ({
  className,
  error = false,
  errorMessage,
  label,
  size = 'md',
  helperText,
  disabled = false,
  labelClass,
  id,
  type = 'text',
  ...props
}) => {
  return (
    <div className={size === 'sm' ? 'space-y-1' : 'space-y-[6px]'}>
      {label && (
        <InputTextLabel
          label={label}
          size={size}
          htmlFor={id}
          className={labelClass ? ` ${labelClass}` : ''}
        />
      )}
      {helperText && label && <InputTextHint text={helperText} />}
      <input
        type={type}
        disabled={disabled}
        id={id}
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
      {errorMessage && error && !disabled && (
        <InputTextHint text={errorMessage} error={error} />
      )}
    </div>
  );
};

export default InputText;
