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
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
}

const InputText: React.FC<IInputTextProps> = ({
  className,
  error = false,
  errorMessage,
  label,
  size = 'md',
  helperText,
  disabled = false,
  ...props
}) => {
  if (label) {
    return (
      <InputTextLabel
        label={label}
        size={size}
        className={
          'inline-flex flex-col ' +
          (size === 'sm' ? 'space-y-1' : 'space-y-[6px]')
        }
      >
        {helperText && <InputTextHint text={helperText} />}
        <InputBase
          className={className}
          size={size}
          error={Boolean(error)}
          disabled={disabled}
          {...props}
        />
        {errorMessage && !disabled && (
          <InputTextHint text={errorMessage} error={error} />
        )}
      </InputTextLabel>
    );
  }
  return (
    <>
      <InputBase
        className={className}
        size={size}
        error={Boolean(error)}
        disabled={disabled}
        {...props}
      />
      {errorMessage && !disabled && (
        <InputTextHint
          text={errorMessage}
          error={error}
          className={size === 'sm' ? 'mt-1' : 'mt-[6px]'}
        />
      )}
    </>
  );
};

export default InputText;
