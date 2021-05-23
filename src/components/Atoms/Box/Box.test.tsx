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

  it('renders Box with `padding` correctly', () => {
    render(<Box padding="small">Box</Box>);
    render(<Box padding={{ top: 'xxsmall' }}>Box</Box>);
    expect(screen.getAllByText(/box/i).length).toEqual(2);
  });

  it('renders Box with `direction` correctly', () => {
    render(<Box direction="column">Box</Box>);
    expect(screen.getByText(/box/i)).toBeInTheDocument();
  });

  it('renders Box with `align` correctly', () => {
    render(<Box align="center">Box</Box>);
    expect(screen.getByText(/box/i)).toBeInTheDocument();
  });

  it('renders Box with `justify` correctly', () => {
    render(<Box justify="space-evenly">Box</Box>);
    expect(screen.getByText(/box/i)).toBeInTheDocument();
  });

  it('renders Box with `grow` correctly', () => {
    render(<Box grow={1}>Box</Box>);
    expect(screen.getByText(/box/i)).toBeInTheDocument();
  });

  it('renders Box with `shrink` correctly', () => {
    render(<Box shrink={2}>Box</Box>);
    expect(screen.getByText(/box/i)).toBeInTheDocument();
  });

  it('renders Box with `wrap` correctly', () => {
    render(<Box wrap="wrap">Box</Box>);
    expect(screen.getByText(/box/i)).toBeInTheDocument();
  });

  it('renders Box with `gap` correctly', () => {
    render(<Box gap="small">Box</Box>);
    expect(screen.getByText(/box/i)).toBeInTheDocument();
  });
});
