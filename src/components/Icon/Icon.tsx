import React from 'react';

interface IIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The size of the component.
   * xs - 16x16
   * sm - 24x24
   * md - 32x32
   * @default 'sm'
   */
  size?: 'xs' | 'sm' | 'md';

  /**
   * An icon element.
   */
  icon: React.ReactNode;
}

const Icon: React.FC<IIconProps> = ({
  className,
  icon,
  size = 'sm',
  ...props
}) => {
  return (
    <span
      className={
        'inline-flex items-center ' +
        (size === 'sm' ? 'h-6 w-6' : size === 'xs' ? 'h-4 w-4' : 'h-8 w-8') +
        (className ? ` ${className}` : '')
      }
      {...props}
    >
      {icon}
    </span>
  );
};

export default Icon;
