import styled, { css } from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { ParagraphProps } from '.';

const createMarkedStyle = (marked: ParagraphProps['marked']) => {
  if (typeof marked === 'string') {
    return css`
      background-color: ${theme.palette[marked]};
    `;
  }
  return;
};

const StyledParagraph = styled.p<ParagraphProps>`
  ${({ variant }) => variant && theme.typography[variant]};
  color: ${({ color }) => color && theme.palette[color]};
  margin: ${({ disableMargins }) => disableMargins && 0};
  ${({ marked }) => createMarkedStyle(marked)}
`;

StyledParagraph.defaultProps = {
  theme,
};

export default StyledParagraph;
