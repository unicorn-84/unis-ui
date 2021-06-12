import React, { FC, HTMLAttributes } from 'react';
import { ISpacing } from '../../../theme/types';
import PaginationItemContainer from './PaginationItem.styles';

export interface PaginationItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * Fill color and border color.
   */
  color?: 'light' | 'dark';
  /**
   * The size of the component;
   */
  size?: keyof ISpacing;
  /**
   * The shape of the components.
   */
  shape?: 'circular' | 'rounded' | 'quadratic';
  /**
   * If `true` the component is selected.
   */
  active?: boolean;
}

const PaginationItem: FC<PaginationItemProps> = ({
  color = 'dark',
  size = 'small',
  shape = 'circular',
  active = false,
  ...props
}) => (
  <PaginationItemContainer
    color={color}
    size={size}
    shape={shape}
    active={active}
    tabIndex={active ? -1 : 0}
    {...props}
  />
);

export default PaginationItem;
