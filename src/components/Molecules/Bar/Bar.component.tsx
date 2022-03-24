import * as React from 'react';
import Box, { BoxProps } from '../../Atoms/Box';
import BarContainer from './Bar.style';

export interface BarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    Pick<
      BoxProps,
      'margin' | 'padding' | 'justify' | 'align' | 'direction' | 'wrap'
    > {
  /**
   * A component type or primitive that is rendered as the type of the root element.
   */
  as?: React.ElementType;
  /**
   * The positioning type.
   */
  fixed?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The z-index CSS property.
   */
  zIndex?: number;
  /**
   * The colors of the component.
   */
  variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'gray';
}

const Header: React.FC<BarProps> = ({
  children,
  as,
  margin,
  padding,
  fixed,
  zIndex,
  variant = 'light',
  justify,
  align,
  direction,
  wrap,
  ...props
}) => {
  return (
    <BarContainer
      {...props}
      as={as}
      fixed={fixed}
      zIndex={zIndex}
      variant={variant}
    >
      <Box
        margin={margin}
        padding={padding}
        justify={justify}
        direction={direction}
        align={align}
        wrap={wrap}
      >
        {children}
      </Box>
    </BarContainer>
  );
};

export default Header;
