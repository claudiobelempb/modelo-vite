import {
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_SPACE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ListDefaultContainer = styled.ul<TypeDefault>`
  ${({ ...props }) => css`
    display: ${props.display ? props.display : 'flex'};
    gap: ${props.gap && THEME_SPACE_DEFAULT[props.gap]};
    list-style-type: none;
    width: 100%;
    font-size: ${props.fontSize
      ? THEME_SPACE_DEFAULT[props.fontSize]
      : '1.6rem'};

    & svg {
      background-color: ${props.iconBgcolor &&
      THEME_COLORS_DEFAULT[props.iconBgcolor]};
      color: ${props.iconColor && THEME_COLORS_DEFAULT[props.iconColor]};
      font-size: ${props.iconSize && THEME_SPACE_DEFAULT[props.iconSize]};
    }

    ${props.textcolor &&
    css`
      color: ${props.textcolor && THEME_COLORS_DEFAULT[props.textcolor]};
    `}
    ${props.bgcolor &&
    css`
      background-color: ${props.bgcolor && THEME_COLORS_DEFAULT[props.bgcolor]};
    `}

    ${props.isVisibility &&
    css`
      visibility: hidden;
      opacity: 0;
    `}

    ${props.isDisplay &&
    css`
      display: none;
    `}

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
      flex-direction: ${props.direction && THEME_FLEX_DEFAULT[props.direction]};
    `}

    ${props.aitems &&
    css`
      align-items: ${props.aitems && THEME_FLEX_DEFAULT[props.aitems]};
    `}

    ${props.jcontent &&
    css`
      justify-content: ${props.jcontent && THEME_FLEX_DEFAULT[props.jcontent]};
    `}
  `}
`;
