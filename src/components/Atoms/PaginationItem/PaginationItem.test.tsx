import React from 'react';
import { render, screen } from '@testing-library/react';
import PaginationItem from '.';
//TODO: <PaginationItem />
describe('PaginationItem', () => {
  it('should render correctly', () => {
    render(
      <PaginationItem
        data-testid="root"
        color="light"
        size="small"
        shape="rounded"
        selected
      />,
    );
    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
});
