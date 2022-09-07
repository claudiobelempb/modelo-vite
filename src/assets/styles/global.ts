import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /*----------*----------*----------*----------*---------- Reset */
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  /* #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  } */

  html, body {
    ${({ theme }) => css`
      font-family: ${theme.fonts.fontFamile};
      font-size: ${theme.size.base16};
      font-weight: ${theme.fonts.fontWeight.regular};
      -webkit-font-smoothing: antialiased;
      scroll-behavior: smooth;
      font-size: 62.5%;
      background-color: ${theme.colors.background};
    `}
  }

  h1, h2, h3, h4, h5, h6 {
    ${({ theme }) => css`
      font-family: ${theme.fonts.fontFamile};
      font-size: ${theme.size.base16};
      color: ${theme.colors.title};
    `}
  }

  a {
    text-decoration: none;
    color: inherit;
    /* background-color: inherit; */
    /* width: 100%; */
    /* text-align: center; */
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

  ol,
  ul {
    list-style-position: inside;
    list-style-type: none;
  }

  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    width: 100%;
    overflow-y: auto;
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
