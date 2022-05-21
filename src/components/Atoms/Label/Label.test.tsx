import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Label from '.';

expect.extend(toHaveNoViolations);

describe('Label', () => {
  test('should render correctly', async () => {
    render(
      <Label label="Name">
        <input />
      </Label>
    );

    expect(screen.getByRole('textbox', { name: 'Name' })).toBeVisible();
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Label label="Password" size="sm">
        <input type="password" />
      </Label>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  test('should forward classes to native input', () => {
    render(<Label label="Name" className="smth" />);

    expect(screen.getByText('Name')).toHaveClass('smth');
  });

  describe('props: label', () => {
    test('should render correctly', () => {
      render(<Label label="Name" />);

      expect(screen.getByText('Name')).toBeVisible();
    });
  });

  describe('props: size', () => {
    test('should render correctly', () => {
      render(<Label label="Name" size="sm" />);

      expect(screen.getByText('Name')).toBeVisible();
    });
  });

  describe('props: color', () => {
    test('should render correctly', () => {
      render(<Label label="Name" color="#000" />);

      expect(screen.getByText('Name')).toBeVisible();
    });
  });
});
