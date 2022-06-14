import React from 'react';
import { render, screen } from '@testing-library/react';
import InputTextLabel from '.';

describe('InputTextLabel', () => {
  test('should render correctly', async () => {
    render(
      <InputTextLabel label="Username">
        <input />
      </InputTextLabel>
    );

    expect(screen.getByText('Username')).toBeVisible();
  });

  test('should forward classes', () => {
    render(
      <InputTextLabel data-testid="testid" label="Username" className="class" />
    );

    expect(screen.getByTestId('testid')).toHaveClass('class');
  });

  describe('props: label', () => {
    test('should render correctly', () => {
      render(<InputTextLabel label="Username" />);

      expect(screen.getByText('Username')).toBeVisible();
    });
  });

  describe('props: size', () => {
    test('should render correctly', () => {
      render(<InputTextLabel label="Username" size="sm" />);

      expect(screen.getByText('Username')).toBeVisible();
    });
  });
});
