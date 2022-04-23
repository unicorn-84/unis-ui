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

  test('should forward classes to native button', () => {
    render(<Button className="smth">Share on Telegram</Button>);

    expect(
      screen.getByRole('button', { name: 'Share on Telegram' })
    ).toHaveClass('smth');
  });

  describe('props: disabled', () => {
    test('should forward it to native buttons', () => {
      render(<Button disabled>Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toHaveAttribute('disabled');
    });
  });

  describe('props: color', () => {
    test('should render a primary button', () => {
      render(<Button color="primary">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render a secondary button', () => {
      render(<Button color="secondary">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });
  });

  describe('props: variant', () => {
    test('should render a contained button', () => {
      render(<Button variant="contained">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render a outlined button', () => {
      render(<Button variant="outlined">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });

    test('should render a text button', () => {
      render(<Button variant="text">Share on Telegram</Button>);

      expect(
        screen.getByRole('button', { name: 'Share on Telegram' })
      ).toBeVisible();
    });
  });
});
