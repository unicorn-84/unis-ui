import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Box from '.';

describe('Box', () => {
  it('renders Box correctly', () => {
    render(<Box>Box</Box>);
    expect(screen.getByText(/box/i)).toBeInTheDocument();
  });

  it('renders Box with `margin` correctly', () => {
    render(<Box margin="small">Box</Box>);
    render(<Box margin={{ top: 'xxsmall' }}>Box</Box>);
    expect(screen.getAllByText(/box/i).length).toEqual(2);
  });
});
