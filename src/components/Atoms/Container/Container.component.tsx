import React, { FC, HTMLAttributes } from 'react';
import StyledContainer from './Container.styles';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If 'true', the left and right padding is removed.
   */
  disableGutters?: boolean;
  /**
   * Determine the max-width of the container.
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Container: FC<ContainerProps> = ({
  children,
  disableGutters = false,
  maxWidth,
  ...props
}) => (
  <StyledContainer
    disableGutters={disableGutters}
    maxWidth={maxWidth}
    {...props}
  >
    {children}
  </StyledContainer>
);

export default Container;
