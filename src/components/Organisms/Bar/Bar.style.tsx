import styled, { css } from 'styled-components';
import { BarProps } from '.';

function positionStyle({ position }: BarProps) {
  switch (position) {
    case 'fixed':
      return css`
        position: fixed;
        left: auto;
        right: 0;
        top: 0;
        @media print {
          position: absolute;
        }
      `;
    case 'absolute':
      return css`
        position: absolute;
        left: auto;
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
        left: auto;
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

const HeaderContainer = styled.div<BarProps>`
  ${({ position }) => position && positionStyle}
`;

export default HeaderContainer;
