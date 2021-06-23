import styled, { css } from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { BarProps } from '.';

function createPositionStyle({ position }: BarProps) {
  switch (position) {
    case 'fixed':
      return css`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        @media print {
          position: absolute;
        }
      `;
    case 'absolute':
      return css`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
      `;
    case 'relative':
      return css`
        position: 'relative';
      `;
    case 'sticky': {
      return css`
        position: 'sticky';
        left: 0;
        right: 0;
        top: 0;
      `;
    }
    default:
      return css`
        position: 'static';
      `;
  }
}

function createColorStyle({ color }: BarProps) {
  switch (color) {
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
  ${({ position }) => position && createPositionStyle}
  ${({ color }) => color && createColorStyle}
  z-index: ${({ zIndex }) => zIndex};
`;

export default HeaderContainer;
