import styled, { css } from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { Colors } from '../../../theme/DefaultTheme/defaultPalette';
import { HeadingProps } from './Heading.component';

function createMarkedStyle({ marked }: HeadingProps) {
  return css`
    background-color: ${marked && Colors[marked]};
    display: inline-block;
  `;
}

const StyledHeading = styled.h1<HeadingProps>`
  ${({ variant }) => theme.typography?.[variant || 'title']};
  color: ${({ color }) => color && Colors[color]};
  ${({ marked }) => marked && createMarkedStyle};
  margin: ${({ disableMargins }) => disableMargins && 0};
`;

StyledHeading.defaultProps = {
  theme,
};

export default StyledHeading;
