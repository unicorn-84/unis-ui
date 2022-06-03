import React from 'react';

interface IInputTextHintProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * An assistive text.
   */
  text: string;

  /**
   * If `true`, the component is displayed in an error state.
   * @default false
   */
  error?: boolean;
}

const InputTextHint: React.FC<IInputTextHintProps> = ({
  className,
  text,
  error = false,
  ...props
}) => {
  return (
    <p
      className={
        (error ? 'text-[#bb251a] ' : 'text-[#667085] ') +
        'text-xs' +
        (className ? ` ${className}` : '')
      }
      {...props}
    >
      {text}
    </p>
  );
};

export default InputTextHint;
