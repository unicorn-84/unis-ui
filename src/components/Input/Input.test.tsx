import React from 'react';
import { render, screen } from '@testing-library/react';
// import { axe, toHaveNoViolations } from 'jest-axe';
import Input from '.';

// expect.extend(toHaveNoViolations);

describe('Input', () => {
  test('should render correctly', async () => {
    render(<Input label="Your name" error="Validation message text" />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  // test('should have no accessibility violations', async () => {
  //   const { container } = render(<Input label="Your name" error />);

  //   const results = await axe(container);

  //   expect(results).toHaveNoViolations();
  // });

  test('should forward classes to native input', () => {
    render(<Input className="smth" />);
    expect(screen.getByRole('textbox')).toHaveClass('smth');
  });

  describe('props: label', () => {
    test('should render an input label', () => {
      render(<Input label="Password" />);

      expect(screen.getByRole('textbox', { name: 'Password' })).toBeVisible();
    });
  });

  describe('props: error', () => {
    test('should render correctly', async () => {
      render(<Input error />);

      expect(screen.getByRole('textbox')).toBeVisible();
    });

    test('should render an error message', () => {
      render(<Input error="Validation message text" />);

      expect(screen.getByText('Validation message text')).toBeVisible();
    });
  });
});
