import {
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_SIZE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const NavDefaultContainer = styled.nav<TypeDefault>`
  ${({
    theme,
    bgtext,
    fontSize = 'base16',
    isAfter,
    bgcolor,
    direction,
    aitems,
    jcontent,
    zIndex,
    isOpenNav
  }) => css`
    width: 100%;
    /* height: 84px; */
    padding: 1rem 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    font-weight: 400;
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    font-weight: ${theme.fonts.fontWeight.bold};
    z-index: ${zIndex};

    color: inherit;
    background-color: inherit;
    ${
      bgtext &&
      css`
        color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
      `
    }
    ${
      bgcolor &&
      css`
        background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
      `
    }

    ${
      direction &&
      css`
        display: flex;
        flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
      `
    }

    ${
      aitems &&
      css`
        display: flex;
        align-items: ${aitems && THEME_FLEX_DEFAULT[aitems]};
      `
    }

    ${
      jcontent &&
      css`
        display: flex;
        justify-content: ${jcontent && THEME_FLEX_DEFAULT[jcontent]};
      `
    }

    /* &:hover {
      color: ${theme.colors.hover};
    } */

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 0.2rem;
      background-color: ${theme.colors.red};
      transition: all 300ms ease-in-out;
    }

    ${
      isAfter &&
      css`
        &:hover::after {
          left: 25%;
          width: 50%;
        }
      `
    }

    /* @media ${theme.media.medium} {
      display: block;
      /* flex-direction: row; */
      /* align-content: center;
      height: 100vh; */
    }

    @media ${theme.media.large} {
      /* display: block; */
      /* flex-direction: column;
      align-content: center;
      height: 100vh; */
    } */
  `}
`;

export const NavDefaultBrand = styled.div`
  ${({}) => css``}
`;

export const NavDefaultSerach = styled.div`
  ${({}) => css``}
`;

export const NavMobileDefaultContainer = styled.nav<TypeDefault>`
  ${({
    theme,
    bgtext,
    fontSize = 'base16',
    isAfter,
    bgcolor,
    direction,
    aitems,
    jcontent,
    isOpenNav,
    zIndex
  }) => css`
    position: fixed;
    top: 84px;
    width: 80%;
    height: 100%;
    left: -80%;
    display: flex;
    z-index: ${zIndex};
    font-weight: 400;
    padding-top: 40px;
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};

    font-weight: ${theme.fonts.fontWeight.bold};

    color: inherit;
    background-color: #fff;
    transition: 1s;

    ${
      isOpenNav &&
      css`
        left: 0;
      `
    }

    ${
      bgtext &&
      css`
        color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
      `
    }
    ${
      bgcolor &&
      css`
        background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
      `
    }

    ${
      direction &&
      css`
        display: flex;
        flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
      `
    }

    ${
      aitems &&
      css`
        display: flex;
        align-items: ${aitems && THEME_FLEX_DEFAULT[aitems]};
      `
    }

    ${
      jcontent &&
      css`
        display: flex;
        justify-content: ${jcontent && THEME_FLEX_DEFAULT[jcontent]};
      `
    }

    /* &:hover {
      color: ${theme.colors.hover};
    } */

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 0.2rem;
      background-color: ${theme.colors.red};
      transition: all 300ms ease-in-out;
    }

    ${
      isAfter &&
      css`
        &:hover::after {
          left: 25%;
          width: 50%;
        }
      `
    }

    /* @media ${theme.media.medium} {
      display: none;
      /* flex-direction: column;
      align-content: center;
      height: 100vh; */
    }

    @media ${theme.media.large} {
      display: block;
      /* flex-direction: column;
      align-content: center;
      height: 100vh; */
    } */
  `}
`;

export const NavMobileDefaultMask = styled.div<TypeDefault>`
  ${({ zIndex }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: ${zIndex};
  `}
`;
