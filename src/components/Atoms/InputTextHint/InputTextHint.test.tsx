import React from 'react';
import { render, screen } from '@testing-library/react';
import InputTextHint from '.';

describe('InputTextHint', () => {
  test('should render correctly', async () => {
    render(<InputTextHint text="This is an assistive text for the user" />);

    expect(
      screen.getByText('This is an assistive text for the user')
    ).toBeVisible();
  });

  test('should forward classes', () => {
    render(
      <InputTextHint
        text="This is an assistive text for the user"
        className="class"
      />
    );

    expect(
      screen.getByText('This is an assistive text for the user')
    ).toHaveClass('class');
  });

  describe('props: text', () => {
    test('should render correctly', () => {
      render(<InputTextHint text="This is an assistive text for the user" />);

      expect(
        screen.getByText('This is an assistive text for the user')
      ).toBeVisible();
    });
  });

  describe('props: error', () => {
    test('should render correctly', () => {
      render(<InputTextHint text="Validation message text" error />);

      expect(screen.getByText('Validation message text')).toBeVisible();
    });
  });
});
