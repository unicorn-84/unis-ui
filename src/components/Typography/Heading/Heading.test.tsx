import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from '.';

describe('<Heading />', () => {
  it('should render correctly', () => {
    render(
      <Heading
        level="h1"
        variant="title"
        color="textPrimary"
        disableMargins
        marked="fonGray"
      >
        <span>Heading component</span>,
      </Heading>,
    );
    expect(screen.getByText('Heading component')).toBeInTheDocument();
  });
});
