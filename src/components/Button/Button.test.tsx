import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from '.';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  test('should render correctly', async () => {
    const onClick = jest.fn();

    const user = userEvent.setup();

    render(<Button onClick={onClick}>Share on Telegram</Button>);

    await user.click(screen.getByRole('button', { name: 'Share on Telegram' }));

    expect(onClick).toBeCalledTimes(1);
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<Button>Share on Telegram</Button>);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  test('should forward classes to the native button', () => {
    render(<Button className="class">Share on Telegram</Button>);

    expect(
      screen.getByRole('button', { name: 'Share on Telegram' })
    ).toHaveClass('class');
  });

  describe('props: disabled', () => {
    test('should forward it to the native button', () => {
      render(<Button disabled>Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toHaveAttribute('disabled');
    });
  });

  describe('props: variant', () => {
    test('should render the primary button', () => {
      render(<Button variant="primary">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the outline primary button', () => {
      render(<Button variant="outline primary">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the outline gray button', () => {
      render(<Button variant="outline gray">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the ghost button', () => {
      render(<Button variant="ghost">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });
  });

  describe('props: size', () => {
    test('should render the xs button', () => {
      render(<Button size="xs">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the sm button', () => {
      render(<Button size="sm">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the md button', () => {
      render(<Button size="md">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the lg button', () => {
      render(<Button size="lg">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });
  });

  describe('props: fullWidth', () => {
    test('should render the full width button', () => {
      render(<Button fullWidth>Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });
  });

  describe('props: destructive', () => {
    test('should render the destructive button', () => {
      render(<Button destructive>Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });
  });

  describe('props: iconStart', () => {
    test('should render the icon element placed before the children', () => {
      render(
        <Button
          iconStart={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              data-testid="test"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          }
        >
          Share on Telegram
        </Button>
      );

      expect(screen.getByTestId('test')).toBeVisible();
    });
  });

  describe('props: iconEnd', () => {
    test('should render the icon element placed after the children', () => {
      render(
        <Button
          iconEnd={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              data-testid="test"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          }
        >
          Share on Telegram
        </Button>
      );

      expect(screen.getByTestId('test')).toBeVisible();
    });
    test('should not render the icon element if `iconStart` is present', () => {
      render(
        <Button
          iconStart={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          }
          iconEnd={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              data-testid="test"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          }
        >
          Share on Telegram
        </Button>
      );

      expect(screen.queryByTestId('test')).not.toBeInTheDocument();
    });
  });
});
