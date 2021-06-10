import React from 'react';
import { render, screen } from '@testing-library/react';
import PaginationItem from '.';

describe('PaginationItem', () => {
  it('should renders correctly', () => {
    render(<PaginationItem />);
    expect(screen.getByTestId('pagination-item')).toBeInTheDocument();
  });
  it('should renders with `color` correctly', () => {
    render(<PaginationItem color="dark" />);
    expect(screen.getByTestId('pagination-item')).toBeInTheDocument();
  });

  it('should renders with `selected` correctly', () => {
    render(<PaginationItem selected />);
    expect(screen.getByTestId('pagination-item')).toBeInTheDocument();
  });

  it('should renders with `size` correctly', () => {
    render(<PaginationItem size="large" />);
    expect(screen.getByTestId('pagination-item')).toBeInTheDocument();
  });

  it('should renders with `shape` correctly', () => {
    render(<PaginationItem shape="quadratic" />);
    expect(screen.getByTestId('pagination-item')).toBeInTheDocument();
  });
});
