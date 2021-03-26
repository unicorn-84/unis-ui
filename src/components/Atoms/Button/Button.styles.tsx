import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import { DefaultTheme as theme } from '../../../theme';

const primaryColorStyles = css`
  background-color: ${theme.palette?.brandPrimary};
  color: ${theme.palette?.brandPrimary};
  border-color: ${theme.palette?.brandPrimary};
`;

const secondaryColorStyles = css`
  background-color: ${theme.palette?.brandSecondary};
  color: ${theme.palette?.brandSecondary};
  border-color: ${theme.palette?.brandSecondary};
`;

const baseButtonStyles = css`
  ${theme.typography?.['button']};
  padding: 0 ${theme.spacing?.small};
  border: none;
  align-items: center;
  border-radius: ${theme.spacing?.xxsmall};
  cursor: pointer;
  vertical-align: middle;
  display: inline-flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: inherit;
  box-sizing: border-box;
`;

const disabledStyles = css`
  pointer-events: none;
  user-select: none;
  background-color: ${theme.palette?.grayFon};
  color: ${theme.palette?.lightColor};
  border-color: ${theme.palette?.grayFon};
`;

const fullWidthStyles = css`
  width: 100%;
`;

const outlinedStyles = css`
  border-width: 1px;
  border-style: solid;
  background-color: transparent;
`;

const containedStyles = css`
  color: ${theme.palette?.lightColor};
`;

const textStyles = (color: ButtonProps['color']) => {
  return css`
    background-color: transparent;

    :hover,
    :focus {
      background-color: rgba(rgb(61, 2, 64), 0.1);
    }
  `;
};

const StyledButton = styled.button<ButtonProps>`
  ${baseButtonStyles};

  ${({ color }) =>
    color === 'primary'
      ? primaryColorStyles
      : color === 'secondary'
      ? secondaryColorStyles
      : null}

${({ variant, color }) =>
  variant === 'outlined'
    ? outlinedStyles
    : variant === 'contained'
    ? containedStyles
    : textStyles(color)}

  ${({ disabled }) => disabled && disabledStyles}

  ${({ fullWidth }) => fullWidth && fullWidthStyles}
`;

StyledButton.defaultProps = {
  theme,
};

export default StyledButton;
