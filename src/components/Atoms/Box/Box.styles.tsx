import styled, { css } from 'styled-components';
import { BoxProps } from './Box.component';
import { DefaultTheme as theme } from '../../../theme';
import { SizeNames } from '../../../theme/types';

function createFlexBasisStyle({ basis }: BoxProps) {
  if (typeof basis === 'string') {
    return css`
      flex-basis: ${theme.sizing.get(basis) || basis};
    `;
  }
  return;
}

function createHeightStyle({ height }: BoxProps) {
  if (height) {
    if (typeof height === 'string') {
      return css`
        height: ${theme.sizing.get(height as SizeNames) || height};
      `;
    }
    let style = css``;

    Object.entries(height).forEach(item => {
      const [key, value] = item;
      if (typeof value === 'string') {
        if (key === 'min') {
          style = css`
            ${style};
            min-height: ${theme.sizing.get(value as SizeNames) || value};
          `;
        }
        if (key === 'max') {
          style = css`
            ${style};
            max-height: ${theme.sizing.get(value as SizeNames) || value};
          `;
        }
        if (key === 'height') {
          style = css`
            ${style};
            height: ${theme.sizing.get(value as SizeNames) || value};
          `;
        }
      }
    });
    return style;
  }
  return;
}

function createWidthStyle({ width }: BoxProps) {
  if (width) {
    if (typeof width === 'string') {
      return css`
        width: ${theme.sizing.get(width as SizeNames) || width};
      `;
    }

    let style = css``;

    Object.entries(width).forEach(item => {
      const [key, value] = item;
      if (typeof value === 'string') {
        if (key === 'min') {
          style = css`
            ${style};
            min-width: ${theme.sizing.get(width as SizeNames) || width};
          `;
        }
        if (key === 'max') {
          style = css`
            ${style};
            max-width: ${theme.sizing.get(width as SizeNames) || width};
          `;
        }
        if (key === 'width') {
          style = css`
            ${style};
            width: ${theme.sizing.get(width as SizeNames) || width};
          `;
        }
      }
    });
    return style;
  }
  return;
}

const getMarginStyle = ({ margin }: BoxProps) => {
  if (margin) {
    if (typeof margin === 'string') {
      return css`
        margin: ${theme.spacing.get(margin)};
      `;
    }

    let style = css``;

    Object.entries(margin).forEach(item => {
      const [key, value] = item;

      if (key !== 'x' && key !== 'y') {
        style = css`
          ${style};
          ${`margin-${key}: ${theme.spacing.get(value)}`};
        `;
      }

      if (key === 'x') {
        style = css`
          margin-left: ${theme.spacing.get(value)};
          margin-right: ${theme.spacing.get(value)};
          ${style};
        `;
      }

      if (key === 'y') {
        style = css`
          margin-top: ${theme.spacing.get(value)};
          margin-bottom: ${theme.spacing.get(value)};
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
        padding: ${theme.spacing.get(padding)};
      `;
    }

    let style = css``;

    Object.entries(padding).forEach(item => {
      const [key, value] = item;

      if (key !== 'x' && key !== 'y') {
        style = css`
          ${style};
          ${`padding-${key}: ${theme.spacing.get(value)}`};
        `;
      }

      if (key === 'x') {
        style = css`
          padding-left: ${theme.spacing.get(value)};
          padding-right: ${theme.spacing.get(value)};
          ${style};
        `;
      }

      if (key === 'y') {
        style = css`
          padding-top: ${theme.spacing.get(value)};
          padding-bottom: ${theme.spacing.get(value)};
          ${style};
        `;
      }
    });
    return style;
  }
  return;
};

const getGapStyle = ({ gap, direction, wrap }: BoxProps) => {
  if ((!wrap || wrap === 'nowrap') && gap) {
    if (direction === 'column' || direction === 'column-reverse') {
      return css`
        & > *:not(:last-child) {
          margin-bottom: ${theme.spacing.get(gap)};
        }
      `;
    }
    return css`
      & > *:not(:last-child) {
        margin-right: ${theme.spacing.get(gap)};
      }
    `;
  }
  return;
};

const BoxContainer = styled.div<BoxProps>`
  display: ${({ display }) => display};

  flex-direction: ${({ direction }) => direction};

  align-items: ${({ align }) => align};

  justify-content: ${({ justify }) => justify};

  flex-wrap: ${({ wrap }) => wrap};

  flex-shrink: ${({ shrink }) => shrink};

  flex-grow: ${({ grow }) => grow};

  ${({ gap }) => gap && getGapStyle};

  ${({ margin }) => margin && getMarginStyle};

  ${({ padding }) => padding && getPaddingStyle};

  ${({ basis }) => basis && createFlexBasisStyle};

  ${({ height }) => height && createHeightStyle}

  ${({ width }) => width && createWidthStyle}
`;

BoxContainer.defaultProps = {
  theme,
};

export default BoxContainer;
