import styled, { css } from 'styled-components';
import { LinkProps } from '.';
import { DefaultTheme as theme } from '../../../theme';
import { Colors } from '../../../theme/DefaultTheme/defaultPalette';

const disabledStyles = css`
  pointer-events: none;
  opacity: 0.3;
`;

const underlineStyles = (underline: LinkProps['underline']) => {
  switch (underline) {
    case 'none':
      return css`
        text-decoration: none;
        :hover,
        :focus {
          text-decoration: none;
        }
      `;
    case 'always':
      return css`
        text-decoration: underline;
        :hover,
        :focus {
          text-decoration: underline;
        }
      `;
    default:
      return css`
        text-decoration: none;
        :hover,
        :focus {
          text-decoration: underline;
        }
      `;
  }
};

const StyledLink = styled.a<LinkProps>`
  cursor: pointer;

  ${({ disabled }) => disabled && disabledStyles}

  ${({ underline }) => underlineStyles(underline)}

  ${({ variant }) => theme.typography[variant || 'text']};

  color: ${({ color }) => color && Colors[color]};
  background-color: ${({ marked }) => marked && Colors[marked]};
`;

StyledLink.defaultProps = {
  theme,
};

export default StyledLink;
