import React from 'react';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * An error message.
   */
  error?: boolean | string;
  /**
   * A caption for an input.
   */
  label?: string;
}

const Input: React.FC<IInputProps> = ({
  className,
  error = false,
  label,
  ...props
}) => {
  const baseCls =
    'border rounded-[4px] transition text-base py-2 px-4 outline-none disabled:text-slate-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:shadow-none placeholder:text-gray-400 hover:shadow-sm';

  const errorCls =
    'border-[#bb251a] hover:border-[#bb251a] focus:border-[#912018]';

  const InputTextBase: React.FC<
    React.InputHTMLAttributes<HTMLInputElement>
    // eslint-disable-next-line react/prop-types
  > = ({ className = '', ...props }) => {
    return (
      <input
        type="text"
        className={baseCls + (className ? ` ${className}` : '')}
        {...props}
      />
    );
  };

  const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
    children,
  }) => {
    return (
      <label className="inline-flex flex-col space-y-1">
        <span className="text-[#101828] text-base font-medium">{label}</span>
        {children}
      </label>
    );
  };

  if (error) {
    return (
      <>
        <InputTextBase className={errorCls} />
        {typeof error === 'string' && error.trim().length > 0 && (
          <p className="mt-[6px] text-[#bb251a] text-xs">{error}</p>
        )}
      </>
    );
  }

  if (label) {
    return (
      <Label>
        <input
          className={
            'border border-slate-400 rounded-[4px] transition hover:border-slate-500 hover:shadow-sm text-base text-gray-900 py-2 px-4 outline-none focus:border-sky-700 disabled:shadow-none disabled:text-slate-500 disabled:border-gray-300 disabled:bg-gray-100 placeholder:text-gray-400' +
            (className ? ` ${className}` : '')
          }
          {...props}
        />
      </Label>
    );
  }

  return (
    <input
      className={
        'border border-slate-400 rounded-[4px] transition hover:border-slate-500 hover:shadow-sm text-base text-gray-900 py-2 px-4 outline-none focus:border-sky-700 disabled:shadow-none disabled:text-slate-500 disabled:border-gray-300 disabled:bg-gray-100 placeholder:text-gray-400' +
        (className ? ` ${className}` : '')
      }
      {...props}
    />
  );
};

export default Input;
