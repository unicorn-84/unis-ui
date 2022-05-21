import React from 'react';

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * The label text.
   */
  label: string;

  /**
   * The size of the component.
   * @default 'md'
   */
  size?: 'sm' | 'md';

  /**
   * The color of the component.
   */
  color?: string;
}

const Label: React.FC<ILabelProps> = ({
  // eslint-disable-next-line react/prop-types
  className,
  children,
  label,
  size = 'md',
  color,
  ...props
}) => {
  return (
    <label
      className={
        `${size === 'sm' ? 'text-sm font-normal' : 'text-base font-medium'}` +
        (color ? ` text-[${color}]` : '') +
        (className ? ` ${className}` : '')
      }
      {...props}
    >
      {label}
      {children}
    </label>
  );
};

export default Label;
