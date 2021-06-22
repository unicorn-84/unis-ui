import * as React from 'react';
import Container, { ContainerProps } from '../../Atoms/Container';
import Box, { BoxProps } from '../../Atoms/Box';
import BarContainer from './Bar.style';

export interface BarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    Pick<ContainerProps, 'maxWidth'>,
    Pick<BoxProps, 'margin' | 'padding'> {
  /**
   * A component type or primitive that is rendered as the type of the root element.
   */
  as?: React.ElementType;
  /**
   * The positioning type.
   */
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
}

const Header: React.FC<BarProps> = ({
  children,
  maxWidth,
  as,
  margin,
  padding,
  position,
  ...props
}) => {
  return (
    <BarContainer {...props} as={as} position={position}>
      <Container disableGutters maxWidth={maxWidth}>
        <Box
          style={{
            display: 'block',
          }}
          margin={margin}
          padding={padding}
        >
          {children}
        </Box>
      </Container>
    </BarContainer>
  );
};

export default Header;
