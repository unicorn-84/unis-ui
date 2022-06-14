import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from '.';

describe('Icon', () => {
  test('should render correctly', async () => {
    render(
      <Icon
        icon={
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
        data-testid="test"
      />
    );

    expect(screen.getByTestId('test')).toBeVisible();
  });

  test("should forward classes to the icon's container", () => {
    render(
      <Icon
        icon={
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
        className="class"
        data-testid="test"
      />
    );
    expect(screen.getByTestId('test')).toHaveClass('class');
  });

  describe('props: size', () => {
    test('should render correctly', () => {
      render(
        <Icon
          icon={
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
          size="sm"
          data-testid="test"
        />
      );

      expect(screen.getByTestId('test')).toBeVisible();
    });
  });
});
