import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '.';

describe('Text', () => {
  it('renders', () => {
    render(<Text>Text component</Text>);
    expect(screen.getByText('Text component')).toBeInTheDocument();
  });
});
