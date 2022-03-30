import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import BaseButton from '.';

expect.extend(toHaveNoViolations);

describe('<Thing />', () => {
  test('should render correctly', async () => {
    const onClick = jest.fn();

    const user = userEvent.setup();

    render(<BaseButton onClick={onClick}>Share on Telegram</BaseButton>);

    await user.click(screen.getByRole('button', { name: 'Share on Telegram' }));

    expect(onClick).toBeCalledTimes(1);
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<BaseButton>Share on Telegram</BaseButton>);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
