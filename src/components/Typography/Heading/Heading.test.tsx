import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from '.';

describe('Heading', () => {
  it('renders', () => {
    render(
      <Heading level="h1" variant="title">
        <span>Heading component</span>,
      </Heading>,
    );
    expect(screen.getByText('Heading component')).toBeInTheDocument();
  });
});
