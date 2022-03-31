import React, { HTMLAttributes } from 'react';
import { BASE_BUTTON } from '../../constants.js';

const BaseButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  const classes = BASE_BUTTON + (className ? ' ' + className : '');
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default BaseButton;
