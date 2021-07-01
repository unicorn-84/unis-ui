import styled from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { TextProps } from './Text.component';

const StyledText = styled.span<TextProps>`
  ${({ variant }) => variant && theme.typography[variant]};
  color: ${({ color }) => color && theme.palette[color]};
  background-color: ${({ marked }) => marked && theme.palette[marked]};
`;

StyledText.defaultProps = {
  theme,
};

export default StyledText;
