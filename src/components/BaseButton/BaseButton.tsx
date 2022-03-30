import React, { HTMLAttributes } from 'react';

const BaseButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className="rounded px-4 py-2 text-sm font-medium tracking-wide "
    >
      {children}
    </button>
  );
};

export default BaseButton;
