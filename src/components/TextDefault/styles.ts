import {
  textDecoration,
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_FONT_FAMILY_DEFAULT,
  THEME_LINE_HEIGHT_DEFAULT,
  THEME_SIZE_DEFAULT,
  THEME_SPACE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ContainerTextDefault = styled.p<TypeDefault>`
  ${({
    theme,
    bgtext,
    as,
    fontSize,
    fontWeight,
    isUppercase,
    padding,
    paddingX,
    paddingY,
    margin,
    marginX,
    marginY,
    fontFamily = 'roboto',
    lineHeight = 'base130',
    bgcolor,
    width,
    height,
    radius,
    jcontent,
    aitems,
    direction
  }) => css`
    display: flex;
    font-family: ${fontFamily && THEME_FONT_FAMILY_DEFAULT[fontFamily]};
    font-style: normal;
    font-size: 16px;
    line-height: ${lineHeight && THEME_LINE_HEIGHT_DEFAULT[lineHeight]};
    background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    font-weight: ${fontWeight ? fontWeight : '400'};
    width: ${width && THEME_SPACE_DEFAULT[width]};
    height: ${height && THEME_SPACE_DEFAULT[height]};
    border-radius: ${radius && THEME_SPACE_DEFAULT[radius]};
    justify-content: ${jcontent && THEME_FLEX_DEFAULT[jcontent]};
    align-items: ${aitems && THEME_FLEX_DEFAULT[aitems]};
    flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
    ${textDecoration(isUppercase ? isUppercase : false)}

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
  `}
`;
