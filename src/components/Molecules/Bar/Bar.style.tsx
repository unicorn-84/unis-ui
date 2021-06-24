import styled, { css } from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { BarProps } from '.';

function createFixedStyle({ fixed }: BarProps) {
  let style = css`
    position: fixed;
    @media print {
      position: absolute;
    }
  `;
  switch (fixed) {
    case 'top':
      return css`
        left: 0;
        right: 0;
        top: 0;
        ${style};
      `;
    case 'right':
      return css`
        right: 0;
        top: 0;
        bottom: 0;
        ${style};
      `;
    case 'bottom':
      return css`
        right: 0;
        left: 0;
        bottom: 0;
        ${style};
      `;
    case 'left': {
      return css`
        left: 0;
        top: 0;
        bottom: 0;
        ${style};
      `;
    }
    default:
      return;
  }
}

function createVariantStyle({ variant }: BarProps) {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.palette.brand.primary};
        color: ${theme.palette.text.light};
      `;
    case 'secondary':
      return css`
        background-color: ${theme.palette.brand.secondary};
        color: ${theme.palette.text.light};
      `;
    case 'light':
      return css`
        background-color: ${theme.palette.fon.light};
        color: ${theme.palette.text.primary};
      `;
    case 'dark':
      return css`
        background-color: ${theme.palette.fon.dark};
        color: ${theme.palette.text.light};
      `;
    case 'gray':
      return css`
        background-color: ${theme.palette.fon.gray};
        color: ${theme.palette.text.light};
      `;
    default:
      return;
  }
}

const HeaderContainer = styled.div<BarProps>`
  ${({ fixed }) => fixed && createFixedStyle}
  ${({ variant }) => variant && createVariantStyle}
  z-index: ${({ zIndex }) => zIndex};
`;

export default HeaderContainer;
