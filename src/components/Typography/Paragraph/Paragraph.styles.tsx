import styled from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { ParagraphProps } from '.';

const StyledParagraph = styled.p<ParagraphProps>`
  ${({ variant }) => theme.typography?.[variant || 'body']};
  color: ${theme.palette?.text?.secondary};
`;

StyledParagraph.defaultProps = {
  theme,
};

export default StyledParagraph;
