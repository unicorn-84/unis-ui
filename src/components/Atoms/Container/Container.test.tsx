import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Container from '.';

describe('Container', () => {
  it('renders', () => {
    render(<Container>Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
  test('should support maxWidth values', () => {
    render(<Container maxWidth="xs">Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('should support disableGutters', () => {
    render(<Container disableGutters>Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
