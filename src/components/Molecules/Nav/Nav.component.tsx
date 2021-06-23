import * as React from 'react';
import Box, { BoxProps } from '../../Atoms/Box';

export interface NavProps extends Omit<BoxProps, 'as'> {}

const Nav: React.FC<NavProps> = ({ children, ...props }) => (
  <Box as="nav" {...props}>
    {children}
  </Box>
);

export default Nav;
