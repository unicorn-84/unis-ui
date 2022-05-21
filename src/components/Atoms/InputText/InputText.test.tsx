import React from 'react';
import { render, screen } from '@testing-library/react';
import InputText from '.';

describe('InputText', () => {
  test('should render correctly', async () => {
    render(<InputText />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  test('should forward classes to native input', () => {
    render(<InputText className="class" />);
    expect(screen.getByRole('textbox')).toHaveClass('class');
  });
});
