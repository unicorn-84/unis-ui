import * as React from 'react';
import { range } from '../../../utils';
import Box, { BoxProps } from '../../Atoms/Box';
import PaginationItem, {
  PaginationItemProps,
} from '../../Atoms/PaginationItem';
import { PaginationContainer } from './Pagination.style';

export interface PaginationProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    Pick<
      BoxProps,
      'direction' | 'align' | 'justify' | 'wrap' | 'gap' | 'margin' | 'padding'
    >,
    Pick<PaginationItemProps, 'color' | 'size' | 'shape'> {
  /**
   * A number of the pagination items.
   */
  items: number;
  /**
   * The active pagination item;
   */
  active?: number;
  /**
   * A component type or primitive that is rendered as the type of the root element.
   */
  as?: React.ElementType;
}

const Pagination: React.FC<PaginationProps> = ({
  items,
  active = 1,
  as,
  direction,
  align,
  justify,
  wrap,
  gap,
  margin,
  padding,
  color,
  size,
  shape,
  ...props
}) => {
  if (items <= 0) return null;
  if (active > items || active <= 0) {
    active = 1;
  }
  return (
    <PaginationContainer items={items} active={active} as={as} {...props}>
      <Box
        as="ul"
        direction={direction}
        align={align}
        justify={justify}
        wrap={wrap}
        gap={gap}
        margin={margin}
        padding={padding}
      >
        {range(1, items).map(item => (
          <li key={item}>
            <PaginationItem
              selected={item === active}
              color={color}
              size={size}
              shape={shape}
            />
          </li>
        ))}
      </Box>
    </PaginationContainer>
  );
};

export default Pagination;
