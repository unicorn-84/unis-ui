import React, { HTMLAttributes } from 'react';

const BaseButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  const classes =
    'rounded px-4 py-2 text-sm font-medium tracking-wide' +
    (className ? ' ' + className : '');
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default BaseButton;
