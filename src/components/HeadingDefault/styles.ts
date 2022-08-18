import {
  textDecoration,
  THEME_COLORS_DEFAULT,
  THEME_FONT_FAMILY_DEFAULT,
  THEME_LINE_HEIGHT_DEFAULT,
  THEME_SIZE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const HeadingDefaultContainer = styled.h1<TypeDefault>`
  ${({
    theme,
    bgcolor,
    bgtext,
    as,
    fontSize,
    isUppercase,
    fontFamily,
    fontWeight,
    lineHeight = 'base130'
  }) => css`
    color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
    background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    font-family: ${fontFamily && THEME_FONT_FAMILY_DEFAULT[fontFamily]};
    line-height: ${lineHeight && THEME_LINE_HEIGHT_DEFAULT[lineHeight]};
    font-weight: ${fontWeight};
    ${textDecoration(isUppercase ? isUppercase : false)}
  `}
`;
