import styled from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { Colors } from '../../../theme/DefaultTheme/defaultPalette';
import { TextProps } from './Text.component';

const StyledText = styled.span<TextProps>`
  ${({ variant }) => theme.typography[variant || 'text']};
  color: ${({ color }) => color && Colors[color]};
  background-color: ${({ marked }) => marked && Colors[marked]};
`;

StyledText.defaultProps = {
  theme,
};

export default StyledText;
