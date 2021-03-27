import styled, { css } from 'styled-components';
import { hexToChannels } from '../../../utils';
import { ButtonProps } from '.';
import { DefaultTheme as theme } from '../../../theme';

hexToChannels(theme.palette?.brand?.primary);

const primaryColorStyles = css`
  background-color: ${theme.palette?.brand?.primary};
  color: ${theme.palette?.brand?.primary};
  border-color: ${theme.palette?.brand?.primary};
`;

const secondaryColorStyles = css`
  background-color: ${theme.palette?.brand?.secondary};
  color: ${theme.palette?.brand?.secondary};
  border-color: ${theme.palette?.brand?.secondary};
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
  background-color: ${theme.palette?.fon?.gray};
  color: ${theme.palette?.light};
  border-color: ${theme.palette?.fon?.gray};
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
  color: ${theme.palette?.light};
`;

const textStyles = (color: ButtonProps['color']) => {
  switch (color) {
    case 'primary':
      return css`
        color: ${theme.palette?.brand?.primary};
        background-color: transparent;

        :hover,
        :focus {
          background-color: rgba($);
        }
      `;
    case 'secondary':
      return css`
        color: ${theme.palette?.brand?.secondary};
        background-color: transparent;
      `;
    default:
      return;
  }
};

const StyledButton = styled.button<ButtonProps>`
  ${baseButtonStyles};

  ${({ color }) =>
    color === 'primary' ? primaryColorStyles : secondaryColorStyles}

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
