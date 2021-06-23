import styled from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { TextProps } from './Text.component';

const StyledText = styled.span<TextProps>`
  ${({ variant }) => theme.typography?.[variant || 'text']};
  /* FIXME: */
  /* color: ${theme.palette?.text?.secondary}; */
`;

StyledText.defaultProps = {
  theme,
};

export default StyledText;
