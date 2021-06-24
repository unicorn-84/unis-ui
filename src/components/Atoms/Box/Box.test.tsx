import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Box from '.';

describe('<Box />', () => {
  it('should render correctly', () => {
    render(
      <Box
        display="block"
        as="div"
        gap="small"
        wrap="wrap"
        shrink={1}
        grow={1}
        justify="center"
        align="center"
        direction="row"
        padding="small"
        margin={{ bottom: 'small', x: 'medium' }}
        basis="full"
        height={{ min: '100vh' }}
        width={{ width: '1/2' }}
      >
        Box
      </Box>,
    );
    expect(screen.getByText('Box')).toBeInTheDocument();
  });
});
