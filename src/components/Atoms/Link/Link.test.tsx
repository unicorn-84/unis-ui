import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Link from '.';

describe('<Link />', () => {
  it('should render correctly', () => {
    render(
      <Link
        href="#"
        variant="strong"
        marked="fonGray"
        color="textLight"
        disabled
        underline="always"
      >
        link
      </Link>,
    );
    expect(screen.getByText('link')).toBeInTheDocument();
  });
});
