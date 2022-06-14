import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Input from '.';

expect.extend(toHaveNoViolations);

describe('InputText', () => {
  test('should render correctly', async () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  test('should forward classes to the native input', () => {
    render(<Input className="class" />);
    expect(screen.getByRole('textbox')).toHaveClass('class');
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<Input label="Username" id="username" />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('props: label', () => {
    test('should render correctly', () => {
      render(<Input label="Username" id="username" />);

      expect(screen.getByRole('textbox', { name: 'Username' })).toBeVisible();
    });
  });

  describe('props: size', () => {
    test('should render correctly', () => {
      render(<Input label="Username" size="sm" />);

      expect(screen.getByRole('textbox')).toBeVisible();
    });
  });

  describe('props: error', () => {
    test('should render correctly', () => {
      render(<Input error />);

      expect(screen.getByRole('textbox')).toBeVisible();
    });
  });

  describe('props: errorMessage', () => {
    test('should render correctly', () => {
      render(<Input error errorMessage="Validation message text" />);

      expect(screen.getByText('Validation message text')).toBeVisible();
    });

    test('should not render without the error', () => {
      render(<Input errorMessage="Validation message text" />);

      expect(
        screen.queryByText('Validation message text')
      ).not.toBeInTheDocument();
    });
  });

  describe('props: disabled', () => {
    test('should render correctly', () => {
      render(<Input label="Username" disabled />);

      expect(screen.getByRole('textbox')).toHaveAttribute('disabled');
    });

    test('should not render the error message', () => {
      render(
        <Input
          label="Username"
          disabled
          errorMessage="Validation message text"
        />
      );

      expect(
        screen.queryByText('Validation message text')
      ).not.toBeInTheDocument();
    });

    describe('props: labelClass', () => {
      test('should forward classes to the native label', () => {
        render(<Input label="Username" labelClass="class" />);

        expect(screen.getByText('Username')).toHaveClass('class');
      });
    });

    describe('props: id', () => {
      test('should forward id to the native input', () => {
        render(<Input id="username" label="Username" />);

        expect(
          screen.getByRole('textbox', { name: 'Username' })
        ).toHaveProperty('id', 'username');
      });
    });

    describe('props: helperText', () => {
      test('should render correctly', () => {
        render(
          <Input
            label="Username"
            helperText="This is an assistive text for the user"
          />
        );

        expect(
          screen.getByText('This is an assistive text for the user')
        ).toBeVisible();
      });

      test('should not render without the label', () => {
        render(<Input helperText="This is an assistive text for the user" />);

        expect(
          screen.queryByText('This is an assistive text for the user')
        ).not.toBeInTheDocument();
      });
    });
  });

  describe('props: type', () => {
    test('should frender correctly', () => {
      render(<Input type="email" />);

      expect(screen.getByRole('textbox')).toBeVisible();
    });
  });
});
