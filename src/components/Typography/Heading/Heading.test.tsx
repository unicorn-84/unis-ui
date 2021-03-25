import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from '.';

describe('Heading', () => {
  it('renders Heading correctly', () => {
    render(
      <Heading>
        <span>Heading component</span>,
      </Heading>,
    );
    expect(screen.getByText('Heading component')).toBeInTheDocument();
  });
  it('renders Heading with level correctly', () => {
    render(
      <Heading level="h1">
        <span>Heading component</span>,
      </Heading>,
    );
    expect(screen.getByText('Heading component')).toBeInTheDocument();
  });
  it('renders Heading with variant correctly', () => {
    render(
      <Heading variant="title">
        <span>Heading component</span>,
      </Heading>,
    );
    expect(screen.getByText('Heading component')).toBeInTheDocument();
  });
});
