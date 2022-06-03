import React from 'react';
import { render, screen } from '@testing-library/react';
import InputBase from '.';

describe('InputBase', () => {
  test('should render correctly', async () => {
    render(<InputBase />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  test('should forward classes to native input', () => {
    render(<InputBase className="class" />);
    expect(screen.getByRole('textbox')).toHaveClass('class');
  });

  describe('props: size', () => {
    test('should render correctly', () => {
      render(<InputBase size="sm" />);

      expect(screen.getByRole('textbox')).toBeVisible();
    });
  });

  describe('props: error', () => {
    test('should render correctly', () => {
      render(<InputBase error />);

      expect(screen.getByRole('textbox')).toBeVisible();
    });
  });
});
