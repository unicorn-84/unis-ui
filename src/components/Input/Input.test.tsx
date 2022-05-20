import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Input from '.';

expect.extend(toHaveNoViolations);

describe('Input', () => {
  test('should render correctly', async () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<Input placeholder="Your name" />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  test('should forward classes to native input', () => {
    render(<Input className="smth" />);
    expect(screen.getByRole('textbox')).toHaveClass('smth');
  });

  // describe('props: label', () => {
  //   test('should render a input label', () => {
  //     render(<Input label="Passwords" />);

  //     expect(screen.getByRole('textbox', { name: 'Passwords' })).toBeVisible();
  //   });
  // });
});
