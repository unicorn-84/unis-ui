import styled, { css } from 'styled-components';
import { BoxProps } from './Box.component';
import { DefaultTheme as theme } from '../../../theme';

const getMarginStyle = ({ margin }: BoxProps) => {
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

const getPaddingStyle = ({ padding }: BoxProps) => {
  if (padding) {
    if (typeof padding === 'string') {
      return css`
        padding: ${theme.spacing[padding]};
      `;
    }

    let style = css``;

    Object.entries(padding).forEach(item => {
      const [key, value] = item;

      if (key !== 'x' && key !== 'y') {
        style = css`
          ${style};
          ${`padding-${key}: ${theme.spacing[value || 'none']}`};
        `;
      }

      if (key === 'x') {
        style = css`
          padding-left: ${theme.spacing[value || 'none']};
          padding-right: ${theme.spacing[value || 'none']};
          ${style};
        `;
      }

      if (key === 'y') {
        style = css`
          padding-top: ${theme.spacing[value || 'none']};
          padding-bottom: ${theme.spacing[value || 'none']};
          ${style};
        `;
      }
    });
    return style;
  }
  return;
};

const getGapStyle = ({ gap, direction, wrap }: BoxProps) => {
  if (wrap === 'nowrap' && gap) {
    if (direction === 'column' || direction === 'column-reverse') {
      return css`
        & > *:not(:last-child) {
          margin-bottom: ${theme.spacing[gap]};
        }
      `;
    }
    return css`
      & > *:not(:last-child) {
        margin-right: ${theme.spacing[gap]};
      }
    `;
  }
  return;
};

const BoxContainer = styled.div<BoxProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};

  flex-direction: ${({ direction }) => direction};

  align-items: ${({ align }) => align};

  justify-content: ${({ justify }) => justify};

  flex-wrap: ${({ wrap }) => wrap};

  flex-shrink: ${({ shrink }) => shrink};

  flex-grow: ${({ grow }) => grow};

  ${({ gap }) => gap && getGapStyle};

  ${({ margin }) => margin && getMarginStyle};

  ${({ padding }) => padding && getPaddingStyle};
`;

BoxContainer.defaultProps = {
  theme,
};

export default BoxContainer;
