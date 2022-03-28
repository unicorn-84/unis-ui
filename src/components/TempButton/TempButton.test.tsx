import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import TempButton from '.';

expect.extend(toHaveNoViolations);

describe('<TempButton />', () => {
  test('should render correctly', () => {
    const onClick = jest.fn();

    render(<TempButton onClick={onClick}>Share on Telegram</TempButton>);

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<TempButton>Share on Telegram</TempButton>);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
