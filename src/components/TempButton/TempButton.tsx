import React, { ButtonHTMLAttributes } from 'react';

const TempButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};

export default TempButton;
