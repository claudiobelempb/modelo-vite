import { css } from 'styled-components';
import {
  ThemeColorsText,
  THEME_COLORS_DEFAULT,
  TypeThemeNumberDefault
} from '../ThemeType';

export type typePositionDefault = {
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  zIndex?: TypeThemeNumberDefault;
  top?: TypeThemeNumberDefault;
  bottom?: TypeThemeNumberDefault;
  left?: TypeThemeNumberDefault;
  right?: TypeThemeNumberDefault;
  width?: TypeThemeNumberDefault;
  height?: TypeThemeNumberDefault;
  backgroundImg?: string;
  backgroundColor?: ThemeColorsText;
  clipPath?: boolean;
  transformX?: boolean;
  transformY?: boolean;
  translate?: TypeThemeNumberDefault;
};

export const afterDefault = ({
  position = 'absolute',
  zIndex = 0,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  width = 10,
  height = 10,
  backgroundColor = 'background',
  backgroundImg = '',
  clipPath = false,
  transformX = false,
  transformY = false,
  translate = 0
}: typePositionDefault) => css`
  &::after {
    content: '';
    position: ${position};
    z-index: ${zIndex};
    top: calc(10 * ${top}%);
    bottom: calc(10 * ${bottom}%);
    left: calc(10 * ${left}%);
    right: calc(10 * ${right}%);
    width: calc(10 * ${width}%);
    height: calc(10 * ${height}%);
    background-image: url(${backgroundImg});
    background-color: ${THEME_COLORS_DEFAULT[backgroundColor]};
    ${clipPath &&
    css`
      clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%, 0% 0%);
    `}
    ${transformX &&
    css`
      transform: translateX(${translate}0%);
    `}
    ${transformY &&
    css`
      transform: translateX(${translate}0%);
    `}
  }
`;
