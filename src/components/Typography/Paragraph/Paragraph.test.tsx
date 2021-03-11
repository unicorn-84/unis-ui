import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from '.';

describe('Paragraph', () => {
  it('renders', () => {
    render(<Paragraph>Paragraph component</Paragraph>);
    expect(screen.getByText('Paragraph component')).toBeInTheDocument();
  });
});
