import {
  textDecoration,
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_SIZE_DEFAULT,
  THEME_SPACE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ButtonDefaultContainer = styled.button<TypeDefault>`
  ${({
    theme,
    bgtext,
    fontSize = 'base16',
    isAfter,
    bgcolor,
    direction,
    aitems,
    jcontent,
    isPosition,
    left,
    right,
    top,
    bottom,
    padding,
    paddingX,
    paddingY,
    margin,
    marginX,
    marginY,
    width = 'base100p',
    height,
    gap,
    isUppercase
  }) => css`
    width: ${width && THEME_SPACE_DEFAULT[width]};
    height: ${height && THEME_SPACE_DEFAULT[height]};
    position: ${isPosition ? isPosition : 'relative'};
    left: ${left && THEME_SPACE_DEFAULT[left]};
    right: ${right && THEME_SPACE_DEFAULT[right]};
    top: ${top && THEME_SPACE_DEFAULT[top]};
    bottom: ${bottom && THEME_SPACE_DEFAULT[bottom]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    gap: ${gap && THEME_SPACE_DEFAULT[gap]};
    ${textDecoration(isUppercase ? isUppercase : false)}
    border-radius: 0.6rem;
    display: flex;
    border: 0;
    cursor: pointer;
    /* flex-flow: row wrap; */
    font-weight: 400;
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    /* padding: ${theme.size.base16}; */
    font-weight: ${theme.fonts.fontWeight.bold};

    /* color: inherit;
    background-color: inherit; */
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
    ${paddingX &&
    css`
      padding-left: ${THEME_SPACE_DEFAULT[paddingX]};
      padding-right: ${THEME_SPACE_DEFAULT[paddingX]};
    `}

    ${paddingY &&
    css`
      padding-top: ${THEME_SPACE_DEFAULT[paddingY]};
      padding-bottom: ${THEME_SPACE_DEFAULT[paddingY]};
    `}

    ${marginX &&
    css`
      margin-left: ${THEME_SPACE_DEFAULT[marginX]};
      margin-right: ${THEME_SPACE_DEFAULT[marginX]};
    `}

    ${marginY &&
    css`
      margin-top: ${THEME_SPACE_DEFAULT[marginY]};
      margin-bottom: ${THEME_SPACE_DEFAULT[marginY]};
    `}

    /* &:hover {
      color: ${theme.colors.hover};
    } */

    &:hover {
      filter: brightness(0.9);
    }

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

    ${isAfter &&
    css`
      &:hover::after {
        left: 25%;
        width: 50%;
      }
    `}

    @media ${theme.media.small} {
      /* flex-flow: column wrap; */
      /* flex-direction: column;
      align-content: center; */
    }
  `}
`;
