import React, { FC, HTMLAttributes, ReactNode } from 'react';
import StyledContainer from './Container.styles';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Class to be applied to the root element.
   */
  className?: string;
  /**
   * If 'true', the left and right padding is removed.
   */
  disableGutters?: boolean;
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  disableGutters = false,
  maxWidth,
}) => (
  <StyledContainer
    className={className}
    disableGutters={disableGutters}
    maxWidth={maxWidth}
  >
    {children}
  </StyledContainer>
);

export default Container;
