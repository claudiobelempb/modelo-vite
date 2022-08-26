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
      font-size: ${theme.size.base16};
    `}
  }

  a {
    text-decoration: none;
    color: inherit;
    background-color: inherit;
    width: 100%;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem; */
  }

  .radius {
    border-radius: 50%;
  }

  main {
    display: flex;
    flex: 1 1;
    flex-direction: column;
  }

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
