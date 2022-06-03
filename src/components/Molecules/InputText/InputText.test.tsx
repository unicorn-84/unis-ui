import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import InputText from '.';

expect.extend(toHaveNoViolations);

describe('InputText', () => {
  test('should render correctly', async () => {
    render(<InputText />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  test('should forward classes to native input', () => {
    render(<InputText className="class" />);
    expect(screen.getByRole('textbox')).toHaveClass('class');
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<InputText label="Username" />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('props: label', () => {
    test('should render correctly', () => {
      render(<InputText label="Username" />);

      expect(screen.getByRole('textbox', { name: 'Username' })).toBeVisible();
    });
  });

  describe('props: size', () => {
    test('should render correctly', () => {
      render(<InputText label="Username" size="sm" />);

      expect(screen.getByRole('textbox')).toBeVisible();
    });
  });

  describe('props: error', () => {
    test('should render correctly', () => {
      render(<InputText error />);

      expect(screen.getByRole('textbox')).toBeVisible();
    });
  });

  describe('props: errorMessage', () => {
    test('should render correctly', () => {
      render(<InputText errorMessage="Validation message text" />);

      expect(screen.getByText('Validation message text')).toBeVisible();
    });
  });

  describe('props: disabled', () => {
    test('should render correctly', () => {
      render(<InputText label="Username" disabled />);

      expect(screen.getByRole('textbox')).toHaveAttribute('disabled');
    });

    test('should not render an error message', () => {
      render(
        <InputText
          label="Username"
          disabled
          errorMessage="Validation message text"
        />
      );

      expect(
        screen.queryByText('Validation message text')
      ).not.toBeInTheDocument();
    });
  });
});
