import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '.';

describe('Image', () => {
  it('renders Image correctly', () => {
    render(
      <Image
        src="https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_800/v1591287502/lamp.webp"
        alt="The lamp"
      />,
    );
    expect(screen.getByAltText('The lamp')).toBeInTheDocument();
  });

  it('renders Image with placeholder correctly', () => {
    render(
      <Image
        src="bad-uri"
        alt="The lamp"
        placeholder="https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_800/v1591287502/lamp.webp"
      />,
    );
    expect(screen.getByAltText('The lamp')).toBeInTheDocument();
  });
});
