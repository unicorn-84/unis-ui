import styled from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { HeadingProps } from './Heading.component';

const StyledHeading = styled.h1<HeadingProps>`
  ${({ variant }) => variant && theme.typography[variant]};
  color: ${({ color }) => color && theme.palette[color]};
  margin: ${({ disableMargins }) => disableMargins && 0};
  background-color: ${({ marked }) => marked && theme.palette[marked]};
`;

StyledHeading.defaultProps = {
  theme,
};

export default StyledHeading;
