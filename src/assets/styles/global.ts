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
      font-family: 'Oswald', sans-serif;
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
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: ${theme.size.base16};
      color: ${theme.colors.title};
      font-weight: 900;
    `}
  }

  img, figure {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  a {
    font-family: 'Plus Jakarta Sans', sans-serif;
    text-decoration: none;
    color: inherit;
    align-self: flex-start;

    /* background-color: inherit; */
    /* width: max-content; */
    /* text-align: center; */
  }

  p {
    line-height: 160%;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  a:hover {
    filter: brightness(0.9);
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
  span{
    display: block;
  }
`;
