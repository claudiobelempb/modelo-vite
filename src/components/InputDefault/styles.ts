import {
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_SIZE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const InputDefaultContainer = styled.input<TypeDefault>`
  ${({
    theme,
    bgtext,
    fontSize = 'base16',
    bgcolor,
    direction,
    aitems,
    jcontent
  }) => css`
    position: relative;
    display: flex;
    /* flex-flow: row wrap; */
    font-weight: 400;
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    /* padding: ${theme.size.base10}; */
    font-weight: ${theme.fonts.fontWeight.bold};
    background-color: inherit;
    border: 0;
    &:focus {
      border-color: red;
    }
    &::placeholder {
      background-color: #fff;
    }
    ${bgtext &&
    css`
      color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
    `}
    ${bgcolor &&
    css`
      background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
    `}

    ${direction &&
    css`
      display: flex;
      flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
    `}

    ${aitems &&
    css`
      display: flex;
      align-items: ${aitems && THEME_FLEX_DEFAULT[aitems]};
    `}

    ${jcontent &&
    css`
      display: flex;
      justify-content: ${jcontent && THEME_FLEX_DEFAULT[jcontent]};
    `}

    /* &:hover {
      color: ${theme.colors.hover};
    } */

    @media ${theme.media.sm} {
      /* flex-flow: column wrap; */
      flex-direction: column;
      align-content: center;
    }
  `}
`;
