import React from 'react';
import { InputBase, InputTextHint, InputTextLabel } from '../../Atoms/index.js';

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
   * The error message.
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
      <InputBase
        className={className}
        size={size}
        error={Boolean(error)}
        disabled={disabled}
        id={id}
        {...props}
      />
      {errorMessage && error && !disabled && (
        <InputTextHint text={errorMessage} error={error} />
      )}
    </div>
  );
};

export default InputText;
