import React, { HTMLAttributes, FC } from 'react';
import { ISpacing } from '../../../theme/types';
import StyledPaginationItem from './PaginationItem.styles';

export interface PaginationItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The active color.
   */
  color?: 'light' | 'dark';
  /**
   * If `true` the pagination item is selected.
   */
  selected?: boolean;
  /**
   * The size of the component.
   */
  size?: keyof ISpacing;
  /**
   * The shape of the pagination item.
   */
  shape?: 'circular' | 'rounded' | 'quadratic';
}

const PaginationItem: FC<PaginationItemProps> = ({
  color = 'light',
  selected = false,
  size = 'small',
  shape = 'circular',
  ...props
}) => (
  <StyledPaginationItem
    color={color}
    selected={selected}
    tabIndex={0}
    size={size}
    shape={shape}
    {...props}
    data-testid="pagination-item"
  />
);

export default PaginationItem;
