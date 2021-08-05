import styled, { css } from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { TextProps } from './Text.component';

const createMarkedStyle = (marked: TextProps['marked']) => {
  if (typeof marked === 'string') {
    return css`
      background-color: ${theme.palette[marked]};
    `;
  }
  return;
};

const StyledText = styled.span<TextProps>`
  ${({ variant }) => variant && theme.typography[variant]};
  color: ${({ color }) => color && theme.palette[color]};
  ${({ marked }) => createMarkedStyle(marked)};
`;

StyledText.defaultProps = {
  theme,
};

export default StyledText;
