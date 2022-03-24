import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Bar from '.';

describe('<Bar />', () => {
  it('should render correctly', () => {
    render(
      <Bar
        as="header"
        padding="small"
        margin="small"
        fixed="bottom"
        zIndex={1000}
        variant="primary"
        justify="center"
        direction="column"
        wrap="wrap"
        align="center"
      >
        <div>Header</div>
      </Bar>,
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
