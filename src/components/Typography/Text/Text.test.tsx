import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '.';

describe('Text', () => {
  it('renders Text correctly', () => {
    render(<Text>Text component</Text>);
    expect(screen.getByText('Text component')).toBeInTheDocument();
  });
  it('renders Text with variant correctly', () => {
    render(<Text variant="button">Text component</Text>);
    expect(screen.getByText('Text component')).toBeInTheDocument();
  });
  it('renders Text with tag correctly', () => {
    render(<Text tag="span">Text component</Text>);
    expect(screen.getByText('Text component')).toBeInTheDocument();
  });
});
