import styled, { css } from 'styled-components';
import { BoxProps } from './Box.component';
import { DefaultTheme as theme } from '../../../theme';

const getMarginStyles = ({ margin }: BoxProps) => {
  if (margin) {
    if (typeof margin === 'string') {
      return css`
        margin: ${theme.spacing[margin]};
      `;
    }

    let style = css``;

    Object.entries(margin).forEach(item => {
      const [key, value] = item;

      if (key !== 'x' && key !== 'y') {
        style = css`
          ${style};
          ${`margin-${key}: ${theme.spacing[value || 'none']}`};
        `;
      }

      if (key === 'x') {
        style = css`
          margin-left: ${theme.spacing[value || 'none']};
          margin-right: ${theme.spacing[value || 'none']};
          ${style};
        `;
      }

      if (key === 'y') {
        style = css`
          margin-top: ${theme.spacing[value || 'none']};
          margin-bottom: ${theme.spacing[value || 'none']};
          ${style};
        `;
      }
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
