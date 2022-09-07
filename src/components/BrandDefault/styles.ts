import {
  THEME_FLEX_DEFAULT,
  THEME_SPACE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const BrandDefautContainer = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    /* width: 100%;
    height: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit; */
    display: grid;
    grid-area: ${props.gridArea};
    /* background-color: red; */

    & h1 {
      font-size: ${theme.size.base20};
    }

    ${props.paddingX &&
    css`
      padding-left: ${THEME_SPACE_DEFAULT[props.paddingX]};
      padding-right: ${THEME_SPACE_DEFAULT[props.paddingX]};
    `}

    ${props.paddingY &&
    css`
      padding-top: ${THEME_SPACE_DEFAULT[props.paddingY]};
      padding-bottom: ${THEME_SPACE_DEFAULT[props.paddingY]};
    `}

    ${props.marginX &&
    css`
      margin-left: ${THEME_SPACE_DEFAULT[props.marginX]};
      margin-right: ${THEME_SPACE_DEFAULT[props.marginX]};
    `}

    ${props.marginY &&
    css`
      margin-top: ${THEME_SPACE_DEFAULT[props.marginY]};
      margin-bottom: ${THEME_SPACE_DEFAULT[props.marginY]};
    `}

    ${props.direction &&
    css`
      display: flex;
      flex-direction: ${props.direction && THEME_FLEX_DEFAULT[props.direction]};
    `}

    ${props.aitems &&
    css`
      display: flex;
      align-items: ${props.aitems && THEME_FLEX_DEFAULT[props.aitems]};
    `}

    ${props.jcontent &&
    css`
      display: flex;
      justify-content: ${props.jcontent && THEME_FLEX_DEFAULT[props.jcontent]};
    `}
  `}
`;
