import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Link from '.';

describe('Link', () => {
  it('renders Link correctly', () => {
    render(<Link href="#">link</Link>);
    expect(screen.getByText('link')).toBeInTheDocument();
  });

  it('renders disabled Link correctly', () => {
    render(
      <Link disabled href="#">
        link
      </Link>,
    );
    expect(screen.getByText('link')).toBeInTheDocument();
  });

  it('renders underlined Link correctly', () => {
    render(
      <Link underline="always" href="#">
        link
      </Link>,
    );
    expect(screen.getByText('link')).toBeInTheDocument();
  });
});
