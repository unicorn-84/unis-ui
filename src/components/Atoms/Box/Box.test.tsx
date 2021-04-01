import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Box from '.';

describe('Box', () => {
  it('renders Box correctly', () => {
    render(<Box>Box</Box>);
    expect(screen.getByText(/box/i)).toBeInTheDocument();
  });

  it('renders Box with `alignSelf` correctly', () => {
    render(<Box alignSelf="stretch">Box</Box>);
    expect(screen.getByText(/box/i)).toBeInTheDocument();
  });
});
