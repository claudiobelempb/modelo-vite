import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  html {
    font-size: 62.5%;
      scroll-behavior: smooth;
  }

  body {
    ${({ theme }) => css`
      font-family: ${theme.fonts.fontFamile};
      font-size: ${theme.size.base16};
      font-weight: ${theme.fonts.fontWeight.regular};
      -webkit-font-smoothing: antialiased;
    `}
  }

  h1, h2, h3, h4, h5, h6 {
    ${({ theme }) => css`
      font-family: ${theme.fonts.fontFamile};
    `}
  }

  a {
    text-decoration: none;
    color: inherit;
    background-color: inherit;
  }

  ul {
    list-style-type: none;
  }

  /* main {
    display: flex;
    flex: 1 1;
    flex-direction: column;
  } */

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
