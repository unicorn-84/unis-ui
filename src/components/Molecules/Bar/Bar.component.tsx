import * as React from 'react';
import Container, { ContainerProps } from '../../Atoms/Container';
import Box, { BoxProps } from '../../Atoms/Box';
import BarContainer from './Bar.style';

export interface BarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    Pick<ContainerProps, 'maxWidth'>,
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
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
  /**
   * The z-index CSS property.
   */
  zIndex?: number;
  /**
   * The color of the component.
   */
  color?: 'primary' | 'secondary' | 'light' | 'dark' | 'gray';
}

const Header: React.FC<BarProps> = ({
  children,
  maxWidth,
  as,
  margin,
  padding,
  position,
  zIndex,
  color = 'light',
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
      position={position}
      zIndex={zIndex}
      color={color}
    >
      <Container maxWidth={maxWidth}>
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
      </Container>
    </BarContainer>
  );
};

export default Header;
