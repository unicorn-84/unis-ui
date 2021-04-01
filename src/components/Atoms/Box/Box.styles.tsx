import styled, { css } from 'styled-components';
import { BoxProps } from './Box.component';
import { DefaultTheme as theme } from '../../../theme';

const getMarginStyles = ({ margin }: BoxProps) => {
  if (margin) {
    let style = css``;
    Object.entries(margin).forEach(item => {
      const [key, value] = item;
      style = css`
        ${style};
        ${`margin-${key}: ${theme.spacing[value]}`};
      `;
    });
    return style;
  }
  return;
};

const StyledBox = styled.div<BoxProps>`
  display: flex;

  ${getMarginStyles}
`;

StyledBox.defaultProps = {
  theme,
};

export default StyledBox;
