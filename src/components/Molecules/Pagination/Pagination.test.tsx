import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Pagination from './Pagination.component';

describe('<Pagination />', () => {
  test('should render correctly', () => {
    render(
      <Pagination
        data-testid="root"
        items={5}
        active={2}
        as="div"
        direction="column"
        align="center"
        justify="center"
        gap="small"
        wrap="wrap"
        margin="small"
        padding="small"
        color="dark"
        size="small"
        shape="quadratic"
      />,
    );
    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
});
