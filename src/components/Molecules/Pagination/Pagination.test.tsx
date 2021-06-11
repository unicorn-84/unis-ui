import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Pagination from './Pagination.component';

describe('<Pagination />', () => {
  test('should render correctly', () => {
    render(<Pagination data-testid="root" count={5} />);
    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
  test('should render with "direction" correctly', () => {
    render(<Pagination data-testid="root" direction="column" count={5} />);
    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
  test('should render with "gap" correctly', () => {
    render(<Pagination data-testid="root" gap="small" count={5} />);
    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
  test('should render with "color" correctly', () => {
    render(<Pagination data-testid="root" color="dark" count={5} />);
    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
  test('should render with "shape" correctly', () => {
    render(<Pagination data-testid="root" shape="rounded" count={5} />);
    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
  test('should render with "size" correctly', () => {
    render(<Pagination data-testid="root" size="medium" count={5} />);
    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
});
