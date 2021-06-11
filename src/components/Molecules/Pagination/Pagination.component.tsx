import * as React from 'react';
import { ISpacing } from '../../../theme/types';
import { PaginationItem } from '../../Atoms';
import StyledPagination from './Pagination.style';

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * A direction.
   */
  direction?: 'row' | 'column';
  /**
   * The amount of spacing between child elements.
   */
  gap?: keyof ISpacing;
  /**
   * The active color.
   */
  color?: 'light' | 'dark';
  /**
   * The shape of the pagination item.
   */
  shape?: 'circular' | 'rounded' | 'quadratic';
  /**
   * The size of the pagination item.
   */
  size?: keyof ISpacing;
  /**
   * The count of the pagination item.
   */
  count: number;
}

const Pagination: React.FC<PaginationProps> = ({
  direction = 'row',
  gap,
  color = 'light',
  shape = 'circular',
  size = 'small',
  count,
  ...props
}) => {
  const [activeItem, setActiveItem] = React.useState(0);
  return (
    <StyledPagination count={count} direction={direction} gap={gap} {...props}>
      {Array.from({ length: count }).map((_, i) => (
        <PaginationItem
          key={i}
          color={color}
          shape={shape}
          size={size}
          onClick={() => setActiveItem(i)}
          selected={i === activeItem}
        />
      ))}
    </StyledPagination>
  );
};

export default Pagination;
