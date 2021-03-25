import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Container from '.';

describe('Container', () => {
  it('renders Container correctly', () => {
    render(<Container>Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
  test('renders Container with maxWidth correctly', () => {
    render(<Container maxWidth="xs">Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('renders Container with disableGutters correctly', () => {
    render(<Container disableGutters>Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
