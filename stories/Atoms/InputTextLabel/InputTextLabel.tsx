import React from 'react';

interface IInputTextLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * The label text.
   */
  label: string;

  /**
   * The size of the component.
   * @default 'md'
   */
  size?: 'sm' | 'md';
}

const InputTextLabel: React.FC<IInputTextLabelProps> = ({
  className,
  children,
  label,
  size = 'md',
  ...props
}) => {
  return (
    <label
      className={
        'text-[#101828] ' +
        `${size === 'sm' ? 'text-sm font-normal' : 'text-base font-medium'}` +
        (className ? ` ${className}` : '')
      }
      {...props}
    >
      <span>{label}</span>
      {children}
    </label>
  );
};

export default InputTextLabel;
