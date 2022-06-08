import React from 'react';

interface IIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The size of the component.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * An icon element.
   */
  icon: React.ReactNode;
}

const Icon: React.FC<IIconProps> = ({
  className,
  icon,
  size = 'md',
  ...props
}) => {
  return (
    <span
      className={
        'inline-block ' +
        (size === 'md' ? 'h-6 w-6' : size === 'sm' ? 'h-4 w-4' : 'h-8 w-8') +
        (className ? ` ${className}` : '')
      }
      {...props}
    >
      {icon}
    </span>
  );
};

export default Icon;
