import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Link from '.';

expect.extend(toHaveNoViolations);

describe('Link', () => {
  test('should render correctly', async () => {
    render(<Link href="https://developer.mozilla.org">MDN</Link>);

    expect(screen.getByRole('link', { name: 'MDN' })).toHaveAttribute(
      'href',
      'https://developer.mozilla.org'
    );
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Link href="https://developer.mozilla.org">MDN</Link>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  //FIXME: change to `label`
  test('should forward classes to native button', () => {
    render(
      <Link href="https://developer.mozilla.org" className="smth">
        MDN
      </Link>
    );

    expect(screen.getByRole('link', { name: 'MDN' })).toHaveClass('smth');
  });

  describe('props: color', () => {
    test('should render a primary link', () => {
      render(
        <Link href="https://developer.mozilla.org" color="primary">
          MDN
        </Link>
      );

      expect(screen.getByRole('link', { name: 'MDN' })).toBeVisible();
    });

    test('should render a secondary link', () => {
      render(
        <Link href="https://developer.mozilla.org" color="secondary">
          MDN
        </Link>
      );

      expect(screen.getByRole('link', { name: 'MDN' })).toBeVisible();
    });

    test('should render a link link', () => {
      render(
        <Link href="https://developer.mozilla.org" color="link">
          MDN
        </Link>
      );

      expect(screen.getByRole('link', { name: 'MDN' })).toBeVisible();
    });
  });

  describe('props: variant', () => {
    test('should render a text link', () => {
      render(
        <Link href="https://developer.mozilla.org" variant="text">
          MDN
        </Link>
      );

      expect(screen.getByRole('link', { name: 'MDN' })).toBeVisible();
    });

    test('should render a contained link', () => {
      render(
        <Link href="https://developer.mozilla.org" variant="contained">
          MDN
        </Link>
      );

      expect(screen.getByRole('link', { name: 'MDN' })).toBeVisible();
    });

    test('should render a outlined link', () => {
      render(
        <Link href="https://developer.mozilla.org" variant="outlined">
          MDN
        </Link>
      );

      expect(screen.getByRole('link', { name: 'MDN' })).toBeVisible();
    });
  });

  describe('props: underline', () => {
    test('should render a underlined link', () => {
      render(
        <Link href="https://developer.mozilla.org" underlined={false}>
          MDN
        </Link>
      );

      expect(screen.getByRole('link', { name: 'MDN' })).toBeVisible();
    });
  });
});
