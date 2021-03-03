import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Container from '.';

describe('Container', () => {
  it('renders', () => {
    render(<Container>Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
  test('has the class attribute', () => {
    render(<Container className="class">Content</Container>);
    expect(screen.getByText('Content')).toHaveAttribute('class');
  });
});
