import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Bar from '.';

describe('<Bar />', () => {
  it('should render correctly', () => {
    render(
      <Bar
        as="header"
        maxWidth="lg"
        padding="small"
        margin="small"
        position="fixed"
      >
        <div>Header</div>
      </Bar>,
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
