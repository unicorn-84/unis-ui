import { createGlobalStyle, css } from 'styled-components';

const bodyStyles = css`
  background-color: #fafafa;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;
