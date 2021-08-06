import styled from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { ParagraphProps } from '.';

const StyledParagraph = styled.p<ParagraphProps>`
  ${({ variant }) => variant && theme.typography[variant]};
  color: ${({ color }) => color && theme.palette[color]};
  margin: ${({ disableMargins }) => disableMargins && 0};
  background-color: ${({ marked }) => marked && theme.palette[marked]};
`;

StyledParagraph.defaultProps = {
  theme,
};

export default StyledParagraph;
