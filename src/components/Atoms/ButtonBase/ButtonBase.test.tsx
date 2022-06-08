import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import ButtonBase from '.';

expect.extend(toHaveNoViolations);

describe('ButtonBase', () => {
  test('should render correctly', async () => {
    const onClick = jest.fn();

    const user = userEvent.setup();

    render(<ButtonBase onClick={onClick}>Share on Telegram</ButtonBase>);

    await user.click(screen.getByRole('button', { name: 'Share on Telegram' }));

    expect(onClick).toBeCalledTimes(1);
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<ButtonBase>Share on Telegram</ButtonBase>);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  test('should forward classes to the native button', () => {
    render(<ButtonBase className="class">Share on Telegram</ButtonBase>);

    expect(
      screen.getByRole('button', { name: 'Share on Telegram' })
    ).toHaveClass('class');
  });

  describe('props: disabled', () => {
    test('should forward it to the native button', () => {
      render(<ButtonBase disabled>Share on Telegram</ButtonBase>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toHaveAttribute('disabled');
    });
  });

  describe('props: variant', () => {
    test('should render the primary button', () => {
      render(<ButtonBase variant="primary">Share on Telegram</ButtonBase>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the outline primary button', () => {
      render(
        <ButtonBase variant="outline primary">Share on Telegram</ButtonBase>
      );

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the outline gray button', () => {
      render(<ButtonBase variant="outline gray">Share on Telegram</ButtonBase>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the ghost button', () => {
      render(<ButtonBase variant="ghost">Share on Telegram</ButtonBase>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });
  });

  describe('props: size', () => {
    test('should render the xs button', () => {
      render(<ButtonBase size="xs">Share on Telegram</ButtonBase>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the sm button', () => {
      render(<ButtonBase size="sm">Share on Telegram</ButtonBase>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the md button', () => {
      render(<ButtonBase size="md">Share on Telegram</ButtonBase>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render the lg button', () => {
      render(<ButtonBase size="lg">Share on Telegram</ButtonBase>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });
  });

  describe('props: fullWidth', () => {
    test('should render the full width button', () => {
      render(<ButtonBase fullWidth>Share on Telegram</ButtonBase>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });
  });

  describe('props: destructive', () => {
    test('should render the destructive button', () => {
      render(<ButtonBase destructive>Share on Telegram</ButtonBase>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });
  });

  describe('props: iconStart', () => {
    test('should render the icon element placed before the children', () => {
      render(
        <ButtonBase
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
        </ButtonBase>
      );

      expect(screen.getByTestId('test')).toBeVisible();
    });
  });

  describe('props: iconEnd', () => {
    test('should render the icon element placed after the children', () => {
      render(
        <ButtonBase
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
        </ButtonBase>
      );

      expect(screen.getByTestId('test')).toBeVisible();
    });
    test('should not render the icon element if `iconStart` is present', () => {
      render(
        <ButtonBase
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
        </ButtonBase>
      );

      expect(screen.queryByTestId('test')).not.toBeInTheDocument();
    });
  });
});
