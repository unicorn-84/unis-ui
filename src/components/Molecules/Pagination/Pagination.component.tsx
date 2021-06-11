import * as React from 'react';
import { PaginationItem } from '../../Atoms';
import Box, { BoxProps } from '../../Atoms/Box';
import { PaginationItemProps } from '../../Atoms/PaginationItem';
import StyledPagination from './Pagination.style';

export interface PaginationProps
  extends Omit<BoxProps, 'color'>,
    PaginationItemProps {
  /**
   * A count of the pagination items.
   */
  count: number;
}

const Pagination: React.FC<PaginationProps> = ({ count, ...props }) => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  return (
    <StyledPagination count={count}>
      <Box as="ul" {...props}>
        {Array.from({ length: count }).map((_, i) => (
          <li>
            <PaginationItem
              key={i}
              onClick={() => setSelectedItem(i)}
              selected={i === selectedItem}
              {...props}
            />
          </li>
        ))}
      </Box>
    </StyledPagination>
  );
};

export default Pagination;
