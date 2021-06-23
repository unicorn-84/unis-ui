import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '.';

describe('<Nav />', () => {
  it('should render correctly', () => {
    render(
      <Nav
        display="block"
        gap="small"
        wrap="wrap"
        shrink={1}
        grow={1}
        justify="center"
        align="center"
        direction="row"
        padding="small"
        margin={{ bottom: 'small', x: 'medium' }}
      >
        Nav
      </Nav>,
    );
    expect(screen.getByText('Nav')).toBeInTheDocument();
  });
});
