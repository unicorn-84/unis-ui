import styled, { css } from 'styled-components';
import { BoxProps } from './Box.component';
import { DefaultTheme as theme } from '../../../theme';

const getDirectionStyles = ({ direction }: BoxProps) => css`
  flex-direction: ${direction};
`;

const getAlignStyles = ({ align }: BoxProps) => css`
  align-items: ${align};
`;

const getGrowStyles = ({ grow }: BoxProps) => css`
  flex-grow: ${grow};
`;

const getWrapStyles = ({ wrap }: BoxProps) => css`
  flex-wrap: ${wrap};
`;

const getShrinkStyles = ({ shrink }: BoxProps) => css`
  flex-shrink: ${shrink};
`;

const getJustifyStyles = ({ justify }: BoxProps) => css`
  justify-content: ${justify};
`;

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

const getPaddingStyles = ({ padding }: BoxProps) => {
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

const getGapStyles = ({ gap, direction, wrap }: BoxProps) => {
  if (!wrap && gap) {
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

const StyledBox = styled.div<BoxProps>`
  list-style: none;
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  ${props => props.direction && getDirectionStyles}
  ${props => props.align && getAlignStyles}
  ${props => props.justify && getJustifyStyles}
  ${props => props.margin && getMarginStyles}
  ${props => props.padding && getPaddingStyles}
  ${props => props.grow && getGrowStyles}
  ${props => props.shrink && getShrinkStyles}
  ${props => props.wrap && getWrapStyles}
  ${props => props.gap && getGapStyles};
`;

StyledBox.defaultProps = {
  theme,
};

export default StyledBox;
