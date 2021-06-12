import React from 'react';
import { render, screen } from '@testing-library/react';
import PaginationItem from '.';

describe('PaginationItem', () => {
  it('should render correctly', () => {
    render(
      <PaginationItem
        data-testid="root"
        color="light"
        size="small"
        shape="rounded"
        active
      />,
    );
    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
});
