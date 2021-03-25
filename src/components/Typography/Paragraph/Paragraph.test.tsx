import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from '.';

describe('Paragraph', () => {
  it('renders Paragraph correctly', () => {
    render(<Paragraph>Paragraph component</Paragraph>);
    expect(screen.getByText('Paragraph component')).toBeInTheDocument();
  });
  it('renders Paragraph with variant correctly', () => {
    render(<Paragraph variant="body">Paragraph component</Paragraph>);
    expect(screen.getByText('Paragraph component')).toBeInTheDocument();
  });
});
